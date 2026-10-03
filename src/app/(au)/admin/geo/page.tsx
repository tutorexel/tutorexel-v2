"use client";

/**
 * GeoGuard — Admin Dashboard
 * Route: /admin/geo
 * Protected by GEO_ADMIN_PASSWORD env var.
 */

import { useState, useEffect, useCallback } from "react";

interface GeoConfig {
  enabled: boolean;
  siteName: string;
  allowedCountries: string[];
  whitelistedIPs: string[];
  testMode: boolean;
  testCountry: string;
}

const COUNTRY_NAMES: Record<string, string> = {
  AU: "Australia", US: "United States", GB: "United Kingdom", CA: "Canada",
  NZ: "New Zealand", IN: "India", SG: "Singapore", PH: "Philippines",
  MY: "Malaysia", PK: "Pakistan", BD: "Bangladesh", LK: "Sri Lanka",
  AE: "United Arab Emirates", SA: "Saudi Arabia", NG: "Nigeria",
  ZA: "South Africa", DE: "Germany", FR: "France", IT: "Italy",
  ES: "Spain", NL: "Netherlands", JP: "Japan", KR: "South Korea",
  CN: "China", BR: "Brazil", MX: "Mexico", AR: "Argentina",
};

function countryLabel(code: string) {
  return COUNTRY_NAMES[code] ? `${COUNTRY_NAMES[code]} (${code})` : code;
}

function statusBadgeStyle(enabled: boolean): React.CSSProperties {
  return {
    display: "inline-block", borderRadius: 20, padding: "2px 10px", fontSize: 12,
    fontWeight: 600, marginLeft: 8,
    background: enabled ? "#dcfce7" : "#fee2e2",
    color: enabled ? "#15803d" : "#b91c1c",
  };
}

const s: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh", background: "#f0f4f8",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    display: "flex", alignItems: "center", justifyContent: "center", padding: 24,
  },
  loginCard: {
    background: "#fff", borderRadius: 16, padding: "40px 36px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)", width: "100%", maxWidth: 400,
  },
  card: {
    background: "#fff", borderRadius: 16, padding: "32px 36px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)", width: "100%", maxWidth: 680,
  },
  logo: { fontSize: 32, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#6b7280", marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: 600, color: "#374151", marginBottom: 4 },
  sectionHint: { fontSize: 13, color: "#9ca3af", marginBottom: 12 },
  section: { marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #e5e7eb" },
  lastSection: { marginBottom: 0 },
  input: {
    flex: 1, padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: 8,
    fontSize: 14, outline: "none", color: "#111827",
  },
  row: { display: "flex", gap: 8, alignItems: "center" },
  tag: {
    display: "inline-flex", alignItems: "center", gap: 6,
    background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe",
    borderRadius: 20, padding: "4px 12px", fontSize: 13, fontWeight: 500, margin: "4px",
  },
  tagX: {
    background: "none", border: "none", cursor: "pointer",
    color: "#93c5fd", fontSize: 16, lineHeight: 1, padding: 0,
  },
  ipTag: {
    display: "flex", alignItems: "center", justifyContent: "space-between",
    background: "#f9fafb", border: "1px solid #e5e7eb", borderRadius: 8,
    padding: "8px 14px", marginBottom: 6, fontFamily: "monospace", fontSize: 14,
  },
  removeBtn: {
    background: "none", border: "1px solid #fca5a5", color: "#ef4444",
    borderRadius: 6, padding: "3px 10px", cursor: "pointer", fontSize: 12,
  },
  primaryBtn: {
    background: "#FF6B35", color: "#fff", border: "none", borderRadius: 8,
    padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  ghostBtn: {
    background: "#fff", color: "#374151", border: "1px solid #d1d5db", borderRadius: 8,
    padding: "10px 18px", fontSize: 14, fontWeight: 500, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  toggleOn: {
    background: "#dcfce7", color: "#15803d", border: "1px solid #bbf7d0",
    borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 700,
    cursor: "pointer", whiteSpace: "nowrap" as const,
  },
  toggleOff: {
    background: "#fee2e2", color: "#b91c1c", border: "1px solid #fecaca",
    borderRadius: 8, padding: "10px 20px", fontSize: 14, fontWeight: 700,
    cursor: "pointer", whiteSpace: "nowrap" as const,
  },
  toast: {
    position: "fixed" as const, bottom: 24, right: 24, background: "#111827",
    color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 14,
    fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 9999,
  },
  error: { color: "#ef4444", fontSize: 13, marginTop: 6 },
  myIP: {
    display: "flex", alignItems: "center", gap: 8, marginTop: 10,
    padding: "8px 14px", background: "#f9fafb", borderRadius: 8,
    border: "1px solid #e5e7eb", fontSize: 13,
  },
};

export default function GeoAdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [config, setConfig] = useState<GeoConfig | null>(null);
  const [newIP, setNewIP] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [myIP, setMyIP] = useState("detecting...");
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [toast, setToast] = useState("");

  useEffect(() => {
    fetch("https://api.ipify.org?format=json")
      .then((r) => r.json())
      .then((d: { ip: string }) => setMyIP(d.ip))
      .catch(() => setMyIP("unknown"));
  }, []);

  function showToast(msg: string) {
    setToast(msg);
    setTimeout(() => setToast(""), 2500);
  }

  const apiFetch = useCallback(
    async (method: "GET" | "POST", body?: object) => {
      const res = await fetch("/api/admin/geo", {
        method,
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": password,
        },
        body: body ? JSON.stringify(body) : undefined,
      });
      return res;
    },
    [password]
  );

  async function login() {
    setLoading(true);
    setLoginError("");
    try {
      const res = await apiFetch("GET");
      if (res.ok) {
        const data: GeoConfig = await res.json();
        setConfig(data);
        setAuthed(true);
      } else {
        setLoginError("Incorrect password. Check GEO_ADMIN_PASSWORD env var.");
      }
    } catch {
      setLoginError("Could not connect to API.");
    }
    setLoading(false);
  }

  async function action(payload: object) {
    setLoading(true);
    try {
      const res = await apiFetch("POST", payload);
      if (res.ok) {
        const data: { config: GeoConfig } = await res.json();
        setConfig(data.config);
        showToast("Saved ✓");
      } else {
        const err = (await res.json().catch(() => ({}))) as { error?: string };
        showToast(err.error || `Save failed (HTTP ${res.status})`);
      }
    } catch {
      showToast("Error saving — check connection.");
    }
    setLoading(false);
  }

  if (!authed) {
    return (
      <div style={s.page}>
        <div style={s.loginCard}>
          <div style={s.logo}>🌏</div>
          <h1 style={s.title}>GeoGuard Admin</h1>
          <p style={s.subtitle}>Enter the admin password to manage geo-blocking.</p>
          <input
            type="password"
            placeholder="Admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && login()}
            style={{ ...s.input, display: "block", width: "100%", marginBottom: 12 }}
            autoFocus
          />
          {loginError && <p style={s.error}>{loginError}</p>}
          <button
            onClick={login}
            disabled={loading || !password}
            style={{ ...s.primaryBtn, width: "100%", padding: "12px", marginTop: 8 }}
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>
        </div>
      </div>
    );
  }

  if (!config) return null;

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <h1 style={{ ...s.title, marginBottom: 2 }}>
                🌏 GeoGuard
                <span style={statusBadgeStyle(config.enabled)}>
                  {config.enabled ? "ACTIVE" : "DISABLED"}
                </span>
              </h1>
              <p style={s.subtitle}>Site: <strong>{config.siteName}</strong></p>
            </div>
            <button
              onClick={() => action({ action: "toggle" })}
              disabled={loading}
              style={config.enabled ? s.toggleOn : s.toggleOff}
            >
              {config.enabled ? "✓ Blocking ON" : "✗ Blocking OFF"}
            </button>
          </div>
        </div>

        <div style={s.section}>
          <p style={s.sectionTitle}>Allowed Countries</p>
          <p style={s.sectionHint}>Only visitors from these countries can access the site.</p>

          <div style={{ marginBottom: 12 }}>
            {config.allowedCountries.length === 0 && (
              <span style={{ color: "#9ca3af", fontStyle: "italic", fontSize: 14 }}>
                No countries set — everyone is blocked!
              </span>
            )}
            {config.allowedCountries.map((code) => (
              <span key={code} style={s.tag}>
                {countryLabel(code)}
                <button
                  style={s.tagX}
                  onClick={() => action({ action: "remove-country", code })}
                  title={`Remove ${code}`}
                >
                  ×
                </button>
              </span>
            ))}
          </div>

          <div style={s.row}>
            <input
              style={s.input}
              type="text"
              placeholder="Country code, e.g. AU, US, NZ"
              value={newCountry}
              onChange={(e) => setNewCountry(e.target.value.toUpperCase())}
              onKeyDown={(e) => {
                if (e.key === "Enter" && newCountry.trim()) {
                  action({ action: "add-country", code: newCountry.trim() });
                  setNewCountry("");
                }
              }}
              maxLength={2}
            />
            <button
              style={s.primaryBtn}
              disabled={!newCountry.trim() || loading}
              onClick={() => {
                action({ action: "add-country", code: newCountry.trim() });
                setNewCountry("");
              }}
            >
              Add Country
            </button>
          </div>
        </div>

        {/* Test Mode — simulate a country for debugging */}
        <div style={s.section}>
          <p style={s.sectionTitle}>
            Test Mode
            {config.testMode && (
              <span style={{
                ...statusBadgeStyle(true),
                background: "#fef3c7",
                color: "#92400e",
                marginLeft: 8,
              }}>
                ⚠ ON
              </span>
            )}
          </p>
          <p style={s.sectionHint}>
            Simulate a country to test blocking. When ON, middleware ignores real IP and uses this country.
            <br />
            <strong>Turn OFF in production!</strong>
          </p>

          <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
            <button
              onClick={() => action({ action: "toggle-test-mode" })}
              disabled={loading}
              style={config.testMode ? s.toggleOn : s.toggleOff}
            >
              {config.testMode ? "✓ Test Mode ON" : "✗ Test Mode OFF"}
            </button>
          </div>

          {config.testMode && (
            <div style={s.row}>
              <input
                style={s.input}
                type="text"
                placeholder="Simulated country, e.g. IN, US, AU"
                value={config.testCountry}
                maxLength={2}
                onChange={(e) =>
                  setConfig({ ...config, testCountry: e.target.value.toUpperCase() })
                }
                onBlur={() => action({ action: "set-test-country", code: config.testCountry })}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    action({ action: "set-test-country", code: config.testCountry });
                  }
                }}
              />
              <button
                style={s.primaryBtn}
                disabled={loading}
                onClick={() => action({ action: "set-test-country", code: config.testCountry })}
              >
                Save
              </button>
            </div>
          )}

          {config.testMode && config.testCountry && (
            <p style={{ fontSize: 13, color: "#374151", marginTop: 8 }}>
              Middleware will treat ALL visitors as coming from: <strong>{config.testCountry}</strong>
            </p>
          )}
        </div>

        <div style={s.lastSection}>
          <p style={s.sectionTitle}>Whitelisted IPs</p>
          <p style={s.sectionHint}>
            These IP addresses bypass geo-blocking — always allowed regardless of country.
          </p>

          {config.whitelistedIPs.length === 0 && (
            <p style={{ color: "#9ca3af", fontStyle: "italic", fontSize: 14, marginBottom: 12 }}>
              No IPs whitelisted yet.
            </p>
          )}

          {config.whitelistedIPs.map((ip) => (
            <div key={ip} style={s.ipTag}>
              <span>{ip}</span>
              <button style={s.removeBtn} onClick={() => action({ action: "remove-ip", ip })}>
                Remove
              </button>
            </div>
          ))}

          <div style={{ ...s.row, marginTop: 12 }}>
            <input
              style={s.input}
              type="text"
              placeholder="e.g. 203.1.2.3"
              value={newIP}
              onChange={(e) => setNewIP(e.target.value.trim())}
              onKeyDown={(e) => {
                if (e.key === "Enter" && newIP) {
                  action({ action: "add-ip", ip: newIP });
                  setNewIP("");
                }
              }}
            />
            <button
              style={s.primaryBtn}
              disabled={!newIP || loading}
              onClick={() => {
                action({ action: "add-ip", ip: newIP });
                setNewIP("");
              }}
            >
              Add IP
            </button>
          </div>

          <div style={s.myIP}>
            <span>Your current IP:</span>
            <strong style={{ fontFamily: "monospace" }}>{myIP}</strong>
            {myIP !== "detecting..." && myIP !== "unknown" && !config.whitelistedIPs.includes(myIP) && (
              <button
                style={{ ...s.ghostBtn, padding: "4px 12px", fontSize: 13 }}
                onClick={() => action({ action: "add-ip", ip: myIP })}
              >
                + Whitelist My IP
              </button>
            )}
            {config.whitelistedIPs.includes(myIP) && (
              <span style={{ color: "#15803d", fontSize: 12, fontWeight: 600 }}>✓ Already whitelisted</span>
            )}
          </div>
        </div>
      </div>

      {toast && <div style={s.toast}>{toast}</div>}
    </div>
  );
}
