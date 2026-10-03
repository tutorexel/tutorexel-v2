"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type SubmissionType = "free-trial" | "contact" | "enroll" | "free-assessment" | "careers" | "co-curricular" | "calendly";

interface Submission {
  id: string;
  type: SubmissionType;
  timestamp: string;
  trashedAt?: string;
  data: Record<string, string | number | boolean | null | undefined>;
}

const TYPE_LABELS: Record<string, string> = {
  "free-trial": "Free Trial", contact: "Contact", enroll: "Enrolment",
  "free-assessment": "Free Assessment", careers: "Career",
  "co-curricular": "Co-Curricular", calendly: "Calendly",
};

const TYPE_COLORS: Record<string, string> = {
  "free-trial": "#16a34a", contact: "#2563eb", enroll: "#d97706",
  "free-assessment": "#7c3aed", careers: "#db2777",
  "co-curricular": "#0891b2", calendly: "#ea580c",
};

const s: Record<string, React.CSSProperties> = {
  page: { minHeight: "100vh", background: "#f0f4f8", fontFamily: "-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 },
  loginCard: { background: "#fff", borderRadius: 16, padding: "40px 36px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", width: "100%", maxWidth: 400 },
  card: { background: "#fff", borderRadius: 16, padding: "32px 36px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", width: "100%", maxWidth: 1200 },
  logo: { fontSize: 32, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 },
  subtitle: { fontSize: 14, color: "#6b7280", marginBottom: 24 },
  label: { fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 4, display: "block" },
  input: { width: "100%", boxSizing: "border-box" as const, padding: "10px 14px", border: "1px solid #d1d5db", borderRadius: 8, fontSize: 14, outline: "none", color: "#111827", background: "#fff", height: 40 },
  primaryBtn: { background: "#FF6B35", color: "#fff", border: "none", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", width: "100%", marginTop: 8 },
  ghostBtn: { background: "#fff", color: "#374151", border: "1px solid #d1d5db", borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 500, cursor: "pointer", whiteSpace: "nowrap" as const },
  toast: { position: "fixed" as const, bottom: 24, right: 24, background: "#111827", color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 9999 },
  toastError: { position: "fixed" as const, bottom: 24, right: 24, background: "#b91c1c", color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 14, fontWeight: 500, boxShadow: "0 4px 16px rgba(0,0,0,0.2)", zIndex: 9999 },
};

const SUBMISSIONS_SESSION_KEY = "te_admin_pwd";

export default function SubmissionsPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [trashed, setTrashed] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [view, setView] = useState<"active" | "trash">("active");
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [viewSub, setViewSub] = useState<Submission | null>(null);
  const [toast, setToast] = useState<{ msg: string; err?: boolean } | null>(null);
  const [storedPwd, setStoredPwd] = useState("");
  const importRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string, err = false) => {
    setToast({ msg, err });
    setTimeout(() => setToast(null), 3000);
  };

  const fetchAll = useCallback(async (pwd: string) => {
    setLoading(true);
    try {
      const res = await fetch("/api/submissions", { headers: { "x-admin-password": pwd } });
      if (!res.ok) throw new Error("Unauthorized");
      const data = await res.json();
      setSubmissions(data.submissions || []);
      setTrashed(data.trashed || []);
    } catch {
      showToast("Failed to load submissions", true);
    } finally {
      setLoading(false);
    }
  }, []);

  // Restore session on mount — sessionStorage clears automatically when the tab is closed
  useEffect(() => {
    const saved = sessionStorage.getItem(SUBMISSIONS_SESSION_KEY);
    if (!saved) return;
    fetch("/api/submissions", { headers: { "x-admin-password": saved } })
      .then((res) => {
        if (!res.ok) { sessionStorage.removeItem(SUBMISSIONS_SESSION_KEY); return; }
        return res.json();
      })
      .then((data) => {
        if (!data) return;
        setSubmissions(data.submissions || []);
        setTrashed(data.trashed || []);
        setStoredPwd(saved);
        setAuthed(true);
      })
      .catch(() => sessionStorage.removeItem(SUBMISSIONS_SESSION_KEY));
  }, []);

  const handleLogin = async () => {
    setLoginError("");
    const res = await fetch("/api/submissions", { headers: { "x-admin-password": password } });
    if (!res.ok) { setLoginError("Incorrect password"); return; }
    const data = await res.json();
    setSubmissions(data.submissions || []);
    setTrashed(data.trashed || []);
    sessionStorage.setItem(SUBMISSIONS_SESSION_KEY, password);
    setStoredPwd(password);
    setAuthed(true);
  };

  useEffect(() => {
    if (!authed) return;
    const interval = setInterval(() => fetchAll(storedPwd), 30000);
    return () => clearInterval(interval);
  }, [authed, storedPwd, fetchAll]);

  // ── Actions ──

  const moveToTrash = async (id: string) => {
    const res = await fetch(`/api/submissions/${id}`, { method: "DELETE", headers: { "x-admin-password": storedPwd } });
    if (res.ok) {
      const sub = submissions.find((s) => s.id === id);
      if (sub) {
        setSubmissions((p) => p.filter((s) => s.id !== id));
        setTrashed((p) => [{ ...sub, trashedAt: new Date().toISOString() }, ...p]);
      }
      showToast("Moved to Trash");
    } else showToast("Failed", true);
  };

  const restore = async (id: string) => {
    const res = await fetch(`/api/submissions/${id}`, { method: "POST", headers: { "x-admin-password": storedPwd } });
    if (res.ok) {
      const sub = trashed.find((s) => s.id === id);
      if (sub) {
        setTrashed((p) => p.filter((s) => s.id !== id));
        const { trashedAt: _, ...clean } = sub;
        setSubmissions((p) => [clean, ...p]);
      }
      showToast("Restored");
    } else showToast("Failed", true);
  };

  const permanentDelete = async (id: string) => {
    if (!confirm("Permanently delete? This cannot be undone.")) return;
    const res = await fetch(`/api/submissions/${id}?permanent=1`, { method: "DELETE", headers: { "x-admin-password": storedPwd } });
    if (res.ok) { setTrashed((p) => p.filter((s) => s.id !== id)); showToast("Permanently deleted"); }
    else showToast("Failed", true);
  };

  const emptyTrashAll = async () => {
    if (!confirm(`Permanently delete all ${trashed.length} items in Trash?`)) return;
    const res = await fetch("/api/submissions/empty-trash", { method: "DELETE", headers: { "x-admin-password": storedPwd } });
    if (res.ok) { setTrashed([]); showToast("Trash emptied"); }
    else showToast("Failed", true);
  };

  const exportCSV = () => {
    const rows = filtered;
    if (rows.length === 0) return;
    const allKeys = Array.from(new Set(rows.flatMap((r) => Object.keys(r.data))));
    const headers = ["Date & Time", "Form Type", ...allKeys];
    const lines = rows.map((r) =>
      [new Date(r.timestamp).toLocaleString("en-AU"), r.type,
        ...allKeys.map((k) => { const v = String(r.data[k] ?? ""); return v.includes(",") || v.includes('"') ? `"${v.replace(/"/g, '""')}"` : v; })
      ].join(",")
    );
    const csv = [headers.join(","), ...lines].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `tutorexel-submissions-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importCSV = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (ev) => {
      const text = ev.target?.result as string;
      const [headerLine, ...dataLines] = text.trim().split("\n");
      const headers = headerLine.split(",").map((h) => h.trim().replace(/^"|"$/g, ""));
      const entries = dataLines.filter(Boolean).map((line) => {
        const vals = line.split(",").map((v) => v.trim().replace(/^"|"$/g, ""));
        const data: Record<string, string> = {};
        headers.forEach((h, i) => { if (h !== "Date & Time" && h !== "Form Type") data[h] = vals[i] || ""; });
        const typeIdx = headers.indexOf("Form Type");
        const type = vals[typeIdx] || "contact";
        return { type, data };
      });
      if (entries.length === 0) { showToast("No rows found in CSV", true); return; }
      const res = await fetch("/api/submissions", {
        method: "POST",
        headers: { "x-admin-password": storedPwd, "Content-Type": "application/json" },
        body: JSON.stringify({ entries }),
      });
      if (res.ok) {
        const d = await res.json();
        showToast(`Imported ${d.imported} entries`);
        fetchAll(storedPwd);
      } else showToast("Import failed", true);
      if (importRef.current) importRef.current.value = "";
    };
    reader.readAsText(file);
  };

  const daysLeft = (trashedAt: string) => {
    const ms = 30 * 24 * 60 * 60 * 1000 - (Date.now() - new Date(trashedAt).getTime());
    return Math.max(0, Math.ceil(ms / (24 * 60 * 60 * 1000)));
  };

  const activeList = view === "active" ? submissions : [];
  const trashList = view === "trash" ? trashed : [];
  const currentList = view === "active" ? activeList : trashList;

  const filtered = currentList.filter((s) => {
    const matchType = filter === "all" || s.type === filter;
    const matchSearch = !search || Object.values(s.data).some((v) => String(v ?? "").toLowerCase().includes(search.toLowerCase())) || s.type.includes(search.toLowerCase());
    return matchType && matchSearch;
  });

  const counts: Record<string, number> = { all: submissions.length };
  submissions.forEach((s) => { counts[s.type] = (counts[s.type] || 0) + 1; });

  // ── Login Screen ──
  if (!authed) {
    return (
      <div style={s.page}>
        <div style={s.loginCard}>
          <div style={s.logo}>📋</div>
          <h1 style={s.title}>Form Submissions</h1>
          <p style={s.subtitle}>TutorExel — Admin Access</p>
          <label style={s.label}>Admin Password</label>
          <input style={s.input} type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder="Enter password" autoFocus />
          {loginError && <p style={{ color: "#b91c1c", fontSize: 13, marginTop: 8 }}>{loginError}</p>}
          <button style={s.primaryBtn} onClick={handleLogin}>Sign In</button>
        </div>
      </div>
    );
  }

  // ── Dashboard ──
  return (
    <div style={{ ...s.page, alignItems: "flex-start", paddingTop: 32 }}>
      <div style={s.card}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#111827", margin: 0 }}>TutorExel — Form Submissions</h1>
            <p style={{ fontSize: 14, color: "#6b7280", margin: "4px 0 0" }}>
              {submissions.length} submission{submissions.length !== 1 ? "s" : ""} · {trashed.length} in trash · auto-refreshes every 30s
            </p>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <input ref={importRef} type="file" accept=".csv" style={{ display: "none" }} onChange={importCSV} />
            <button style={{ ...s.ghostBtn, background: "#eff6ff", color: "#2563eb", border: "1px solid #bfdbfe" }} onClick={() => importRef.current?.click()}>
              ↑ Import CSV
            </button>
            <button style={{ ...s.ghostBtn, background: "#f0fdf4", color: "#16a34a", border: "1px solid #bbf7d0" }} onClick={exportCSV}>
              ↓ Export CSV
            </button>
            <button style={s.ghostBtn} onClick={() => fetchAll(storedPwd)}>↻ Refresh</button>
          </div>
        </div>

        {/* Filter Pills + Trash Tab */}
        <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8, marginBottom: 20, alignItems: "center" }}>
          {(["all", "free-trial", "contact", "enroll", "free-assessment", "careers", "co-curricular"] as const).map((t) => (
            <button key={t} onClick={() => { setView("active"); setFilter(t); }} style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", border: view === "active" && filter === t ? "none" : "1px solid #e5e7eb", background: view === "active" && filter === t ? (t === "all" ? "#111827" : TYPE_COLORS[t] || "#111827") : "#fff", color: view === "active" && filter === t ? "#fff" : "#374151" }}>
              {t === "all" ? "All" : TYPE_LABELS[t] || t} ({counts[t] || 0})
            </button>
          ))}
          <div style={{ width: 1, height: 20, background: "#e5e7eb", margin: "0 4px" }} />
          <button
            onClick={() => { setView("trash"); setFilter("all"); }}
            style={{ padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: "pointer", border: "none", background: view === "trash" ? "#b91c1c" : "#fee2e2", color: view === "trash" ? "#fff" : "#b91c1c", display: "flex", alignItems: "center", gap: 5 }}
          >
            🗑 Trash {trashed.length > 0 && <span style={{ background: view === "trash" ? "rgba(255,255,255,0.25)" : "#fecaca", borderRadius: 10, padding: "1px 7px", fontSize: 11 }}>{trashed.length}</span>}
          </button>
          {view === "trash" && trashed.length > 0 && (
            <button onClick={emptyTrashAll} style={{ ...s.ghostBtn, marginLeft: 4, color: "#b91c1c", border: "1px solid #fecaca" }}>
              Empty Trash
            </button>
          )}
        </div>

        {/* Trash info banner */}
        {view === "trash" && (
          <div style={{ background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 8, padding: "10px 16px", marginBottom: 16, fontSize: 13, color: "#92400e" }}>
            Items in trash are automatically deleted after <strong>30 days</strong>.
          </div>
        )}

        {/* Search */}
        <input style={{ ...s.input, marginBottom: 20, maxWidth: 360 }} placeholder="Search by name, email, phone..." value={search} onChange={(e) => setSearch(e.target.value)} />

        {/* Table */}
        {loading ? (
          <p style={{ color: "#6b7280", fontSize: 14 }}>Loading...</p>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: "center" as const, padding: "48px 0", color: "#9ca3af", fontSize: 14 }}>
            {view === "trash" ? "Trash is empty" : "No submissions found"}
          </div>
        ) : (
          <div style={{ overflowX: "auto" as const }}>
            <table style={{ width: "100%", borderCollapse: "collapse" as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: "#f9fafb" }}>
                  {["Date & Time", "Form Type", "Name", "Email", "Phone", "Actions"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left" as const, fontWeight: 600, color: "#374151", borderBottom: "2px solid #e5e7eb", whiteSpace: "nowrap" as const }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((sub) => {
                  const d = sub.data;
                  const name = String(d.parentName || d.fullName || d.name || "—");
                  const email = String(d.email || "—");
                  const phone = String(d.phone || "—");
                  return (
                    <tr key={sub.id} style={{ borderBottom: "1px solid #f3f4f6", background: "#fff" }}>
                      <td style={{ padding: "10px 12px", color: "#6b7280", whiteSpace: "nowrap" as const }}>
                        <div>{new Date(sub.timestamp).toLocaleString("en-AU", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}</div>
                        {sub.trashedAt && <div style={{ fontSize: 11, color: "#b91c1c", marginTop: 2 }}>Deletes in {daysLeft(sub.trashedAt)}d</div>}
                      </td>
                      <td style={{ padding: "10px 12px" }}>
                        <span style={{ background: (TYPE_COLORS[sub.type] || "#374151") + "18", color: TYPE_COLORS[sub.type] || "#374151", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
                          {TYPE_LABELS[sub.type] || sub.type}
                        </span>
                      </td>
                      <td style={{ padding: "10px 12px", fontWeight: 500, color: "#111827" }}>{name}</td>
                      <td style={{ padding: "10px 12px", color: "#2563eb" }}><a href={`mailto:${email}`} style={{ color: "inherit", textDecoration: "none" }}>{email}</a></td>
                      <td style={{ padding: "10px 12px", color: "#374151" }}>{phone}</td>
                      <td style={{ padding: "10px 12px" }}>
                        <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                          <button title="View details" style={{ background: "#f0f9ff", color: "#0369a1", border: "1px solid #bae6fd", borderRadius: 8, padding: "5px 12px", fontSize: 12, fontWeight: 600, cursor: "pointer" }} onClick={() => setViewSub(sub)}>
                            View
                          </button>
                          {view === "active" ? (
                            <button title="Move to Trash" style={{ background: "#fff", color: "#b91c1c", border: "1px solid #fecaca", borderRadius: 8, padding: "5px 8px", fontSize: 15, cursor: "pointer" }} onClick={() => moveToTrash(sub.id)}>
                              🗑
                            </button>
                          ) : (
                            <>
                              <button style={{ ...s.ghostBtn, padding: "4px 10px", fontSize: 11, color: "#16a34a", border: "1px solid #bbf7d0" }} onClick={() => restore(sub.id)}>Restore</button>
                              <button title="Delete permanently" style={{ background: "#fff", color: "#b91c1c", border: "1px solid #fecaca", borderRadius: 8, padding: "5px 8px", fontSize: 15, cursor: "pointer" }} onClick={() => permanentDelete(sub.id)}>✕</button>
                            </>
                          )}
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
      {toast && <div style={toast.err ? s.toastError : s.toast}>{toast.msg}</div>}

      {/* View Detail Modal */}
      {viewSub && (
        <div onClick={() => setViewSub(null)} style={{ position: "fixed" as const, inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: "#fff", borderRadius: 16, width: "100%", maxWidth: 580, maxHeight: "85vh", overflowY: "auto" as const, boxShadow: "0 24px 64px rgba(0,0,0,0.18)" }}>
            {/* Modal header */}
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid #f3f4f6", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <span style={{ background: (TYPE_COLORS[viewSub.type] || "#374151") + "18", color: TYPE_COLORS[viewSub.type] || "#374151", padding: "3px 10px", borderRadius: 12, fontSize: 11, fontWeight: 700, textTransform: "uppercase" as const, letterSpacing: "0.05em" }}>
                  {TYPE_LABELS[viewSub.type] || viewSub.type}
                </span>
                <p style={{ fontSize: 12, color: "#9ca3af", margin: "6px 0 0" }}>
                  {new Date(viewSub.timestamp).toLocaleString("en-AU", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
              <button onClick={() => setViewSub(null)} style={{ background: "none", border: "none", fontSize: 20, cursor: "pointer", color: "#9ca3af", lineHeight: 1, padding: 4 }}>✕</button>
            </div>
            {/* Modal body */}
            <div style={{ padding: "20px 24px 28px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 32px" }}>
                {Object.entries(viewSub.data).filter(([, v]) => v !== null && v !== undefined && v !== "").map(([k, v]) => (
                  <div key={k} style={{ gridColumn: String(v).length > 60 ? "1 / -1" : undefined }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: "#9ca3af", textTransform: "uppercase" as const, letterSpacing: "0.08em", marginBottom: 6 }}>{k.replace(/([A-Z])/g, " $1").replace(/^./, s => s.toUpperCase()).trim()}</div>
                    <div style={{ fontSize: 15, color: "#111827", wordBreak: "break-word" as const, lineHeight: 1.5, fontWeight: 500 }}>
                      {k === "email"
                        ? <a href={`mailto:${String(v)}`} style={{ color: "#2563eb", textDecoration: "none" }}>{String(v)}</a>
                        : k === "cvUrl"
                        ? <a href={String(v)} target="_blank" rel="noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>View CV ↗</a>
                        : String(v).startsWith("http")
                        ? <a href={String(v)} target="_blank" rel="noreferrer" style={{ color: "#2563eb", textDecoration: "underline" }}>{String(v)}</a>
                        : String(v)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
