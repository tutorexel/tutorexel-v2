"use client";

/**
 * Coupons — Admin Dashboard
 * Route: /admin/coupon
 * Protected by COUPONS_ADMIN_PASSWORD (falls back to GEO_ADMIN_PASSWORD).
 * Mirrors the GeoGuard admin look & feel.
 */

import { useCallback, useEffect, useState } from "react";

interface Coupon {
  id: string;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  expiryDate: string | null;
  isActive: boolean;
  usageCount: number;
  maxUses: number | null;
  createdAt: string;
  updatedAt: string;
}

const SESSION_KEY = "te_coupon_pwd";

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
    boxShadow: "0 8px 32px rgba(0,0,0,0.08)", width: "100%", maxWidth: 1080,
  },
  logo: { fontSize: 32, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#6b7280", marginBottom: 24 },
  sectionTitle: { fontSize: 16, fontWeight: 600, color: "#374151", marginBottom: 4 },
  sectionHint: { fontSize: 13, color: "#9ca3af", marginBottom: 12 },
  section: { marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid #e5e7eb" },
  lastSection: { marginBottom: 0 },
  input: {
    width: "100%",
    boxSizing: "border-box" as const,
    padding: "10px 14px",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    fontSize: 14,
    outline: "none",
    color: "#111827",
    background: "#fff",
    height: 40,
  },
  field: { minWidth: 0 },
  label: { fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 4, display: "block" },
  primaryBtn: {
    background: "#FF6B35", color: "#fff", border: "none", borderRadius: 8,
    padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  ghostBtn: {
    background: "#fff", color: "#374151", border: "1px solid #d1d5db", borderRadius: 8,
    padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  dangerBtn: {
    background: "#fff", color: "#b91c1c", border: "1px solid #fecaca", borderRadius: 8,
    padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
  toast: {
    position: "fixed" as const, bottom: 24, right: 24, background: "#111827",
    color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 14,
    fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 9999,
  },
  toastError: {
    position: "fixed" as const, bottom: 24, right: 24, background: "#b91c1c",
    color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 14,
    fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 9999,
  },
  error: { color: "#ef4444", fontSize: 13, marginTop: 6 },
  table: { width: "100%", borderCollapse: "collapse" as const, marginTop: 12, fontSize: 14 },
  th: {
    textAlign: "left" as const, padding: "10px 12px", fontSize: 12,
    color: "#6b7280", fontWeight: 600, borderBottom: "1px solid #e5e7eb",
    textTransform: "uppercase" as const, letterSpacing: 0.4,
  },
  td: { padding: "12px", borderBottom: "1px solid #f3f4f6", verticalAlign: "middle" as const },
  codePill: {
    display: "inline-block", background: "#fff7ed", color: "#9a3412",
    border: "1px solid #fed7aa", borderRadius: 6, padding: "2px 8px",
    fontFamily: "monospace", fontSize: 13, fontWeight: 600,
  },
  badgeOn: {
    display: "inline-block", background: "#dcfce7", color: "#15803d",
    borderRadius: 999, padding: "2px 10px", fontSize: 12, fontWeight: 600,
  },
  badgeOff: {
    display: "inline-block", background: "#fee2e2", color: "#b91c1c",
    borderRadius: 999, padding: "2px 10px", fontSize: 12, fontWeight: 600,
  },
  formGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: 12,
    marginBottom: 12,
  },
  toggle: {
    display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#374151",
  },
  segmented: {
    display: "flex",
    border: "1px solid #d1d5db",
    borderRadius: 8,
    padding: 3,
    background: "#f9fafb",
    height: 40,
    overflow: "hidden",
  },
  segmentedBtn: {
    flex: 1,
    border: "none",
    background: "transparent",
    color: "#6b7280",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
    borderRadius: 6,
    padding: "0 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    whiteSpace: "nowrap" as const,
    transition: "all 0.15s ease",
  },
  segmentedBtnActive: {
    background: "#fff",
    color: "#FF6B35",
    boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
    fontWeight: 600,
  },
  copyLinkBtn: {
    background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe", borderRadius: 8,
    padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer",
    whiteSpace: "nowrap" as const,
  },
};

function formatDiscount(c: Coupon): string {
  if (c.discountType === "percentage") return `${c.discountValue}%`;
  return `$${c.discountValue}`;
}

function formatExpiry(iso: string | null): string {
  if (!iso) return "—";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "—";
  return d.toISOString().slice(0, 10);
}

function isExpired(iso: string | null): boolean {
  if (!iso) return false;
  const t = Date.parse(iso);
  return Number.isFinite(t) && Date.now() > t;
}

export default function CouponAdminPage() {
  const [password, setPassword] = useState("");
  const [authed, setAuthed] = useState(false);
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [toast, setToast] = useState<{ msg: string; kind: "ok" | "err" } | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [storedPwd, setStoredPwd] = useState("");

  const [form, setForm] = useState({
    code: "",
    discountType: "percentage" as "percentage" | "fixed",
    discountValue: "",
    expiryDate: "",
    isActive: true,
    maxUses: "",
  });
  const [formError, setFormError] = useState("");

  function showToast(msg: string, kind: "ok" | "err" = "ok") {
    setToast({ msg, kind });
    setTimeout(() => setToast(null), 2500);
  }

  const apiFetch = useCallback(
    async (path: string, init?: RequestInit) => {
      return fetch(path, {
        ...init,
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": storedPwd,
          ...(init?.headers ?? {}),
        },
      });
    },
    [storedPwd]
  );

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const res = await apiFetch("/api/admin/coupons");
      if (!res.ok) throw new Error("Unauthorized");
      const data = (await res.json()) as { coupons: Coupon[] };
      setCoupons(data.coupons);
    } catch {
      showToast("Failed to load coupons", "err");
    }
    setLoading(false);
  }, [apiFetch]);

  useEffect(() => {
    if (authed) load();
  }, [authed, load]);

  // Restore session on mount — sessionStorage clears when the tab is closed
  useEffect(() => {
    const saved = sessionStorage.getItem(SESSION_KEY);
    if (!saved) return;
    fetch("/api/admin/coupons", { headers: { "x-admin-password": saved } })
      .then((res) => {
        if (!res.ok) { sessionStorage.removeItem(SESSION_KEY); return null; }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setStoredPwd(saved);
        setCoupons((data as { coupons: Coupon[] }).coupons);
        setAuthed(true);
      })
      .catch(() => sessionStorage.removeItem(SESSION_KEY));
  }, []);

  async function login() {
    setLoading(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/coupons", {
        headers: { "x-admin-password": password },
      });
      if (res.ok) {
        const data = (await res.json()) as { coupons: Coupon[] };
        sessionStorage.setItem(SESSION_KEY, password);
        setStoredPwd(password);
        setCoupons(data.coupons);
        setAuthed(true);
      } else {
        setLoginError("Incorrect password.");
      }
    } catch {
      setLoginError("Could not connect to API.");
    }
    setLoading(false);
  }

  function resetForm() {
    setForm({
      code: "",
      discountType: "percentage",
      discountValue: "",
      expiryDate: "",
      isActive: true,
      maxUses: "",
    });
    setEditingId(null);
    setFormError("");
  }

  function startEdit(c: Coupon) {
    setEditingId(c.id);
    setForm({
      code: c.code,
      discountType: c.discountType,
      discountValue: String(c.discountValue),
      expiryDate: c.expiryDate ? c.expiryDate.slice(0, 10) : "",
      isActive: c.isActive,
      maxUses: c.maxUses == null ? "" : String(c.maxUses),
    });
    setFormError("");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function validateForm(): { ok: true; payload: Record<string, unknown> } | { ok: false; error: string } {
    const code = form.code.trim().toUpperCase();
    if (!/^[A-Z0-9_-]{2,32}$/.test(code)) {
      return { ok: false, error: "Code must be 2-32 chars (A-Z, 0-9, _ or -)" };
    }
    const v = Number(form.discountValue);
    if (!Number.isFinite(v) || v <= 0) {
      return { ok: false, error: "Discount value must be greater than 0" };
    }
    if (form.discountType === "percentage" && v > 100) {
      return { ok: false, error: "Percentage cannot exceed 100" };
    }
    let maxUses: number | null = null;
    if (form.maxUses.trim() !== "") {
      const n = Number(form.maxUses);
      if (!Number.isInteger(n) || n <= 0) {
        return { ok: false, error: "Max uses must be a positive integer" };
      }
      maxUses = n;
    }
    let expiryDate: string | null = null;
    if (form.expiryDate) {
      const d = new Date(form.expiryDate + "T23:59:59");
      if (Number.isNaN(d.getTime())) {
        return { ok: false, error: "Invalid expiry date" };
      }
      expiryDate = d.toISOString();
    }
    return {
      ok: true,
      payload: {
        code,
        discountType: form.discountType,
        discountValue: v,
        expiryDate,
        isActive: form.isActive,
        maxUses,
      },
    };
  }

  async function submitForm(e: React.FormEvent) {
    e.preventDefault();
    setFormError("");
    const v = validateForm();
    if (!v.ok) {
      setFormError(v.error);
      return;
    }
    setLoading(true);
    try {
      const res = editingId
        ? await apiFetch(`/api/admin/coupons/${editingId}`, {
            method: "PATCH",
            body: JSON.stringify(v.payload),
          })
        : await apiFetch("/api/admin/coupons", {
            method: "POST",
            body: JSON.stringify(v.payload),
          });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setFormError(data.error || "Failed to save");
      } else {
        resetForm();
        showToast(editingId ? "Coupon updated" : "Coupon created");
        await load();
      }
    } catch {
      setFormError("Network error");
    }
    setLoading(false);
  }

  async function toggleActive(c: Coupon) {
    setLoading(true);
    try {
      const res = await apiFetch(`/api/admin/coupons/${c.id}`, {
        method: "PATCH",
        body: JSON.stringify({ isActive: !c.isActive }),
      });
      if (!res.ok) showToast("Toggle failed", "err");
      else {
        showToast(c.isActive ? "Disabled" : "Enabled");
        await load();
      }
    } catch {
      showToast("Network error", "err");
    }
    setLoading(false);
  }

  async function copyShareLink(c: Coupon) {
    if (typeof window === "undefined") return;
    const url = `${window.location.origin}/enroll?coupon=${encodeURIComponent(c.code)}`;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(url);
      } else {
        const ta = document.createElement("textarea");
        ta.value = url;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast(`Link copied: ${url}`);
    } catch {
      window.prompt("Copy this link:", url);
    }
  }

  async function removeCoupon(c: Coupon) {
    if (typeof window === "undefined") return;
    if (!window.confirm(`Delete coupon "${c.code}"? This cannot be undone.`)) return;
    setLoading(true);
    try {
      const res = await apiFetch(`/api/admin/coupons/${c.id}`, { method: "DELETE" });
      if (!res.ok) showToast("Delete failed", "err");
      else {
        showToast("Coupon deleted");
        if (editingId === c.id) resetForm();
        await load();
      }
    } catch {
      showToast("Network error", "err");
    }
    setLoading(false);
  }

  if (!authed) {
    return (
      <div style={s.page}>
        <div style={s.loginCard}>
          <div style={s.logo}>🎟️</div>
          <h1 style={s.title}>Coupons Admin</h1>
          <p style={s.subtitle}>Enter the admin password to manage coupons.</p>
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

  return (
    <div style={s.page}>
      <div style={s.card}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ ...s.title, marginBottom: 2 }}>🎟️ Coupons</h1>
          <p style={s.subtitle}>Create and manage discount codes for the enrollment flow.</p>
        </div>

        <div style={s.section}>
          <p style={s.sectionTitle}>{editingId ? "Edit Coupon" : "New Coupon"}</p>
          <p style={s.sectionHint}>
            {editingId ? "Update fields and click Save." : "Codes are stored uppercase. Discount values must be greater than 0."}
          </p>

          <form onSubmit={submitForm}>
            <div style={s.formGrid}>
              <div style={s.field}>
                <label style={s.label}>Code *</label>
                <input
                  style={s.input}
                  type="text"
                  value={form.code}
                  onChange={(e) => setForm({ ...form, code: e.target.value.toUpperCase() })}
                  placeholder="e.g. WELCOME10"
                  maxLength={32}
                  required
                />
              </div>
              <div style={s.field}>
                <label style={s.label}>Type *</label>
                <div style={s.segmented} role="radiogroup" aria-label="Discount type">
                  <button
                    type="button"
                    role="radio"
                    aria-checked={form.discountType === "percentage"}
                    onClick={() => setForm({ ...form, discountType: "percentage" })}
                    style={{
                      ...s.segmentedBtn,
                      ...(form.discountType === "percentage" ? s.segmentedBtnActive : {}),
                    }}
                  >
                    % Percentage
                  </button>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={form.discountType === "fixed"}
                    onClick={() => setForm({ ...form, discountType: "fixed" })}
                    style={{
                      ...s.segmentedBtn,
                      ...(form.discountType === "fixed" ? s.segmentedBtnActive : {}),
                    }}
                  >
                    $ Fixed
                  </button>
                </div>
              </div>
              <div style={s.field}>
                <label style={s.label}>
                  Value *{" "}
                  <span style={{ fontWeight: 400, color: "#9ca3af" }}>
                    {form.discountType === "percentage" ? "(0-100)" : "(AUD)"}
                  </span>
                </label>
                <input
                  style={s.input}
                  type="number"
                  step="0.01"
                  min="0.01"
                  max={form.discountType === "percentage" ? "100" : undefined}
                  value={form.discountValue}
                  onChange={(e) => setForm({ ...form, discountValue: e.target.value })}
                  placeholder={form.discountType === "percentage" ? "10" : "20"}
                  required
                />
              </div>
              <div style={s.field}>
                <label style={s.label}>Expiry (optional)</label>
                <input
                  style={s.input}
                  type="date"
                  value={form.expiryDate}
                  onChange={(e) => setForm({ ...form, expiryDate: e.target.value })}
                />
              </div>
              <div style={s.field}>
                <label style={s.label}>Max uses (optional)</label>
                <input
                  style={s.input}
                  type="number"
                  min="1"
                  step="1"
                  value={form.maxUses}
                  onChange={(e) => setForm({ ...form, maxUses: e.target.value })}
                  placeholder="unlimited"
                />
              </div>
              <div style={s.field}>
                <label style={s.label}>Status</label>
                <label style={{ ...s.toggle, paddingTop: 8 }}>
                  <input
                    type="checkbox"
                    checked={form.isActive}
                    onChange={(e) => setForm({ ...form, isActive: e.target.checked })}
                  />
                  Active
                </label>
              </div>
            </div>

            {formError && <p style={s.error}>{formError}</p>}

            <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
              <button type="submit" disabled={loading} style={s.primaryBtn}>
                {loading ? "Saving…" : editingId ? "Save Changes" : "Create Coupon"}
              </button>
              {editingId && (
                <button type="button" onClick={resetForm} style={s.ghostBtn}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        <div style={s.lastSection}>
          <p style={s.sectionTitle}>All Coupons</p>
          <p style={s.sectionHint}>{coupons.length} total</p>

          {coupons.length === 0 ? (
            <p style={{ color: "#9ca3af", fontStyle: "italic", fontSize: 14, marginTop: 12 }}>
              No coupons yet — create your first one above.
            </p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={s.table}>
                <thead>
                  <tr>
                    <th style={s.th}>Code</th>
                    <th style={s.th}>Type</th>
                    <th style={s.th}>Value</th>
                    <th style={s.th}>Expiry</th>
                    <th style={s.th}>Uses</th>
                    <th style={s.th}>Status</th>
                    <th style={s.th}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.map((c) => {
                    const expired = isExpired(c.expiryDate);
                    return (
                      <tr key={c.id}>
                        <td style={s.td}><span style={s.codePill}>{c.code}</span></td>
                        <td style={s.td}>{c.discountType === "percentage" ? "Percentage" : "Fixed"}</td>
                        <td style={s.td}>{formatDiscount(c)}</td>
                        <td style={{ ...s.td, color: expired ? "#b91c1c" : "#374151" }}>
                          {formatExpiry(c.expiryDate)}{expired && " (expired)"}
                        </td>
                        <td style={s.td}>
                          {c.usageCount}{c.maxUses != null ? ` / ${c.maxUses}` : ""}
                        </td>
                        <td style={s.td}>
                          <span style={c.isActive && !expired ? s.badgeOn : s.badgeOff}>
                            {c.isActive ? (expired ? "Expired" : "Active") : "Disabled"}
                          </span>
                        </td>
                        <td style={s.td}>
                          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                            <button style={s.copyLinkBtn} onClick={() => copyShareLink(c)} title="Copy auto-apply link">
                              🔗 Copy link
                            </button>
                            <button style={s.ghostBtn} onClick={() => startEdit(c)}>Edit</button>
                            <button style={s.ghostBtn} onClick={() => toggleActive(c)}>
                              {c.isActive ? "Disable" : "Enable"}
                            </button>
                            <button style={s.dangerBtn} onClick={() => removeCoupon(c)}>Delete</button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {toast && (
        <div style={toast.kind === "err" ? s.toastError : s.toast}>{toast.msg}</div>
      )}
    </div>
  );
}
