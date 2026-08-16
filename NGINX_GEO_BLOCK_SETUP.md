# Nginx Geo-Block Setup for TutorExel

**Purpose**: Hard-block non-Australia traffic at the nginx level so the Next.js app
never even executes for blocked countries. Frontend code never loads — blocked visitors
get a response from nginx directly.

This is stronger than middleware-level blocking because:
- Blocked IPs can't consume server resources
- No JavaScript loads, no dev-tools bypass possible
- Faster response (no Next.js process involved)
- Works even if Next.js app crashes

---

## Step 1: Install GeoIP2 Module & MaxMind Database

SSH into VPS as root:

```bash
# Install nginx GeoIP2 module
apt update
apt install libnginx-mod-http-geoip2 -y

# Create directory for GeoIP databases
mkdir -p /usr/share/GeoIP

# Download MaxMind GeoLite2 Country database (free)
# Option A: Direct download from mirror
wget -O /usr/share/GeoIP/GeoLite2-Country.mmdb \
  https://git.io/GeoLite2-Country.mmdb

# Verify download (should show ~6MB file)
ls -lh /usr/share/GeoIP/GeoLite2-Country.mmdb
```

If direct download fails, create a MaxMind account at https://www.maxmind.com/en/geolite2/signup (free) and download GeoLite2-Country database manually, then upload to `/usr/share/GeoIP/GeoLite2-Country.mmdb`.

---

## Step 2: Configure Nginx

Edit your nginx site config (e.g., `/etc/nginx/sites-available/tutorexel`):

```nginx
# ─── GeoIP2 Configuration ──────────────────────────────────────────────────
# Load the country database and extract the 2-letter country code
geoip2 /usr/share/GeoIP/GeoLite2-Country.mmdb {
    auto_reload 60m;
    $geoip2_country_code country iso_code;
}

# Map: AU → allow (0), everything else → block (1)
map $geoip2_country_code $geo_block {
    default           1;     # block by default
    AU                0;     # allow Australia
    # Add more allowed countries here, e.g.:
    # NZ              0;
    # US              0;
}

# ─── Upstream: Next.js app ─────────────────────────────────────────────────
upstream tutorexel_nextjs {
    server 127.0.0.1:3001;   # <-- change to your actual Next.js port
    keepalive 16;
}

# ─── HTTPS Server ──────────────────────────────────────────────────────────
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name tutorexel.com www.tutorexel.com;

    # SSL certificates (from Let's Encrypt / certbot)
    ssl_certificate     /etc/letsencrypt/live/tutorexel.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tutorexel.com/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    ssl_ciphers         HIGH:!aNULL:!MD5;

    # Expose country code to Next.js (so middleware can also use it)
    proxy_set_header X-Country-Code $geoip2_country_code;

    # ─── Paths that MUST be accessible globally ────────────────────────
    # Admin panel (for managing geo settings from anywhere)
    location /admin/geo {
        proxy_pass http://tutorexel_nextjs;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Country-Code $geoip2_country_code;
    }

    # API routes (webhooks from Razorpay/GHL — must work globally)
    location /api/ {
        proxy_pass http://tutorexel_nextjs;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
    }

    # Blocked page itself (must be accessible so nginx can serve it)
    location /blocked {
        proxy_pass http://tutorexel_nextjs;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
    }

    # Next.js static assets (CSS/JS/images — served fast without proxy logic)
    location /_next/static/ {
        proxy_pass http://tutorexel_nextjs;
        proxy_cache_valid 200 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # ─── ALL OTHER REQUESTS: Check country before forwarding ──────────
    location / {
        # Non-allowed country? Rewrite to /blocked page
        if ($geo_block = 1) {
            rewrite ^ /blocked last;
        }

        # Country allowed → forward to Next.js
        proxy_pass http://tutorexel_nextjs;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto https;
        proxy_set_header X-Country-Code $geoip2_country_code;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }

    # Optional: logging
    access_log /var/log/nginx/tutorexel-access.log;
    error_log  /var/log/nginx/tutorexel-error.log;
}

# ─── HTTP → HTTPS Redirect ──────────────────────────────────────────────────
server {
    listen 80;
    listen [::]:80;
    server_name tutorexel.com www.tutorexel.com;
    return 301 https://$host$request_uri;
}
```

---

## Step 3: Test and Reload Nginx

```bash
# Test configuration syntax
nginx -t

# If OK, reload (no downtime)
systemctl reload nginx

# Check status
systemctl status nginx
```

If `nginx -t` fails, check the error and fix before reloading.

---

## Step 4: Verify It Works

### Test 1: From Australia (or AU VPN)
- Visit `https://tutorexel.com` → site loads normally ✅

### Test 2: From non-AU (e.g. India VPN)
- Visit `https://tutorexel.com` → redirected to `/blocked` page ✅
- Check nginx access log: `tail -f /var/log/nginx/tutorexel-access.log` — should show rewrite

### Test 3: Admin panel accessible globally
- From India VPN, visit `https://tutorexel.com/admin/geo` → loads ✅
- (because `/admin/geo` is explicitly allowed-through)

### Test 4: Webhooks work globally
- Razorpay / GHL webhooks hit `/api/...` → succeeds ✅

---

## Step 5: Whitelist Specific IPs (Optional)

To allow specific IPs regardless of country (e.g., office IP in India for dev), add before the `location /` block:

```nginx
# Allowed IP whitelist (always bypass geo-check)
geo $ip_whitelisted {
    default            0;
    103.21.45.67       1;    # Office IP
    182.70.12.5        1;    # Dev machine
}

# Update the existing map to respect whitelist:
map "$geo_block:$ip_whitelisted" $should_block {
    default  0;
    "1:0"    1;    # blocked country AND not whitelisted → block
}
```

Then change `if ($geo_block = 1)` to `if ($should_block = 1)` in the location block.

---

## Step 6: Add More Allowed Countries

Edit the nginx config `map` block:

```nginx
map $geoip2_country_code $geo_block {
    default 1;
    AU      0;
    NZ      0;    # New Zealand
    US      0;    # United States
    GB      0;    # United Kingdom
}
```

Then reload: `nginx -s reload`

---

## How This Works With the Existing GeoGuard Admin Panel

| Feature | Nginx Geo-Block | Next.js GeoGuard Middleware |
|---------|----------------|----------------------------|
| Hard block (frontend never loads) | ✅ Yes | ❌ No (JS loads first) |
| Dynamic config via dashboard | ❌ Requires nginx reload | ✅ Instant (60s cache) |
| IP whitelist | ✅ (via nginx config) | ✅ (via admin panel) |
| Test mode (simulate country) | ❌ No | ✅ Yes |
| Webhook bypass | ✅ (explicit `/api/` location) | ✅ (path-based) |

**Recommendation**:
- Use **both** together
- Nginx for hard country block (primary defense)
- Next.js middleware for fine-tuned dynamic rules (admin panel, whitelist, test mode)

---

## Troubleshooting

### Error: "geoip2_country_code" module not found
```bash
# Re-install the module
apt install libnginx-mod-http-geoip2 -y
# Make sure module is enabled
ls /etc/nginx/modules-enabled/ | grep geoip2
```

### Database file not found
```bash
# Check file exists and nginx user can read it
ls -la /usr/share/GeoIP/GeoLite2-Country.mmdb
chmod 644 /usr/share/GeoIP/GeoLite2-Country.mmdb
```

### Still not blocking after changes
```bash
# Check nginx actually reloaded
systemctl status nginx
# Check the country detection
curl -H "X-Country-Code: test" http://localhost:3001/api/debug/geo?password=Admin@123
```

### Wrong country detected
The GeoLite2 free database is ~99% accurate. For commercial-grade accuracy, use:
- MaxMind GeoIP2 paid subscription (updates weekly)
- Or switch to Cloudflare (free + most accurate)

---

## Auto-update GeoIP Database (Monthly)

Add cron job to keep database fresh:

```bash
crontab -e
```

Add:
```
0 3 1 * * wget -qO /usr/share/GeoIP/GeoLite2-Country.mmdb https://git.io/GeoLite2-Country.mmdb && nginx -s reload
```

This updates database on the 1st of every month at 3am.
