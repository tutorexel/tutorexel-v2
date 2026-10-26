"use client";

import { useCallback, useEffect, useState } from "react";

type TabType = "indexing" | "sitemap" | "robots" | "llms";
type RegionCode = "au" | "us" | "ca" | "nz";

interface SubmissionRecord {
  url: string;
  time: string;
  engine: "IndexNow" | "Google" | "Both";
  status: string;
}

interface IndexingStatus {
  googleConfigured: boolean;
  indexNowConfigured: boolean;
  quotaUsedToday: number;
  dailyLimit: number;
  history: SubmissionRecord[];
  redisConnected: boolean;
}

interface SitemapItem {
  loc: string;
  lastmod: string;
}

interface CustomUrlItem {
  loc: string;
  lastmod: string;
}

interface FileVersion {
  text: string;
  savedAt: string;
  note?: string;
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<TabType>("indexing");
  const [toast, setToast] = useState<{ msg: string; isError?: boolean } | null>(null);

  const showToast = (msg: string, isError = false) => {
    setToast({ msg, isError });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "32px 24px 60px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      {/* Toast Notification */}
      {toast && (
        <div
          style={{
            position: "fixed",
            bottom: 24,
            right: 24,
            background: toast.isError ? "#b91c1c" : "#111827",
            color: "#fff",
            borderRadius: 8,
            padding: "12px 20px",
            fontSize: 14,
            fontWeight: 500,
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            zIndex: 9999,
          }}
        >
          {toast.msg}
        </div>
      )}

      {/* Page Title & Navigation Tabs */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 26, fontWeight: 700, color: "#111827", margin: "0 0 6px" }}>
          SEO & Indexing Management
        </h1>
        <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 20px" }}>
          Manage instant search indexing, regional sitemaps, robots.txt, and LLM discoverability.
        </p>

        {/* Tab Switcher */}
        <div
          style={{
            display: "inline-flex",
            background: "#e5e7eb",
            borderRadius: 10,
            padding: 4,
            gap: 4,
          }}
        >
          {(
            [
              { id: "indexing", label: "Instant Indexing" },
              { id: "sitemap", label: "Sitemap" },
              { id: "robots", label: "Robots" },
              { id: "llms", label: "LLM file" },
            ] as const
          ).map((tab) => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  border: "none",
                  outline: "none",
                  cursor: "pointer",
                  padding: "8px 20px",
                  borderRadius: 7,
                  fontSize: 14,
                  fontWeight: active ? 600 : 500,
                  background: active ? "#fff" : "transparent",
                  color: active ? "#FF6B35" : "#4b5563",
                  boxShadow: active ? "0 1px 3px rgba(0,0,0,0.1)" : "none",
                  transition: "all 0.15s ease",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Panels */}
      {activeTab === "indexing" && <InstantIndexingTab showToast={showToast} />}
      {activeTab === "sitemap" && <SitemapTab showToast={showToast} />}
      {activeTab === "robots" && <RobotsTab showToast={showToast} />}
      {activeTab === "llms" && <LlmsTab showToast={showToast} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TAB 1: Instant Indexing & Google Add-on
// ─────────────────────────────────────────────────────────────────────────────

function InstantIndexingTab({
  showToast,
}: {
  showToast: (msg: string, isError?: boolean) => void;
}) {
  const [urlsText, setUrlsText] = useState("");
  const [actionType, setActionType] = useState<"URL_UPDATED" | "URL_DELETED">("URL_UPDATED");
  const [forceSubmit, setForceSubmit] = useState(false);
  const [sendToGoogle, setSendToGoogle] = useState(false);
  const [sendAllToGoogle, setSendAllToGoogle] = useState(false);
  const [confirmAllText, setConfirmAllText] = useState("");
  const [status, setStatus] = useState<IndexingStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [lastSummary, setLastSummary] = useState<Record<string, unknown> | null>(null);

  // Google status check single URL
  const [metaUrl, setMetaUrl] = useState("");
  const [metaLoading, setMetaLoading] = useState(false);
  const [metaResult, setMetaResult] = useState<unknown | null>(null);

  const fetchStatus = useCallback(async () => {
    try {
      const res = await fetch("/api/admin/seo/indexing");
      if (!res.ok) return;
      const data: IndexingStatus = await res.json();
      setStatus(data);
    } catch {
      // Ignore background errors
    }
  }, []);

  useEffect(() => {
    fetchStatus();
  }, [fetchStatus]);

  const handleSubmitUrls = async () => {
    const urls = urlsText
      .split("\n")
      .map((u) => u.trim())
      .filter(Boolean);

    if (urls.length === 0) {
      showToast("Please enter at least one URL", true);
      return;
    }

    if (sendToGoogle && sendAllToGoogle && confirmAllText !== "CONFIRM") {
      showToast("Type CONFIRM to send all URLs to Google", true);
      return;
    }

    setLoading(true);
    setLastSummary(null);

    try {
      const res = await fetch("/api/admin/seo/indexing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          urls,
          force: forceSubmit,
          google: sendToGoogle,
          ignoreGoogleInclude: sendToGoogle && sendAllToGoogle,
          type: actionType,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Submission failed", true);
      } else {
        setLastSummary(data.summary);
        showToast("URLs submitted successfully!");
        fetchStatus();
      }
    } catch {
      showToast("Network error submitting URLs", true);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitAllPages = async () => {
    if (!confirm("Submit all new or changed pages from sitemap to IndexNow?")) {
      return;
    }

    setLoading(true);
    setLastSummary(null);

    try {
      const res = await fetch("/api/admin/seo/indexing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          runCron: true,
          force: false,
          google: sendToGoogle,
          ignoreGoogleInclude: false,
          type: "URL_UPDATED",
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Submission failed", true);
      } else {
        setLastSummary(data.summary);
        showToast("Full sitemap submission completed!");
        fetchStatus();
      }
    } catch {
      showToast("Network error during sitemap submission", true);
    } finally {
      setLoading(false);
    }
  };

  const handleCheckGoogleStatus = async () => {
    if (!metaUrl.trim()) {
      showToast("Enter a URL to check Google status", true);
      return;
    }

    setMetaLoading(true);
    setMetaResult(null);

    try {
      const res = await fetch(
        `/api/admin/seo/google-status?url=${encodeURIComponent(metaUrl.trim())}`
      );
      const data = await res.json();
      setMetaResult(data);
    } catch {
      showToast("Failed to fetch Google status", true);
    } finally {
      setMetaLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Main Indexing Form Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#111827" }}>
              Submit URLs to IndexNow & Google
            </h2>
            <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
              Send immediate crawl and index notifications to Bing, Copilot, ChatGPT, and Google.
            </p>
          </div>

          {/* Engine Status Badges */}
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                background: status?.indexNowConfigured ? "#dcfce7" : "#fee2e2",
                color: status?.indexNowConfigured ? "#15803d" : "#b91c1c",
              }}
            >
              IndexNow: {status?.indexNowConfigured ? "Ready" : "Key Missing"}
            </span>

            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 10px",
                borderRadius: 999,
                background: status?.googleConfigured ? "#dcfce7" : "#f3f4f6",
                color: status?.googleConfigured ? "#15803d" : "#6b7280",
              }}
            >
              Google API: {status?.googleConfigured ? "Connected" : "Unset"}
            </span>
          </div>
        </div>

        {/* URLs Textarea */}
        <div style={{ marginBottom: 16 }}>
          <label
            style={{
              fontSize: 12,
              fontWeight: 600,
              color: "#374151",
              marginBottom: 6,
              display: "block",
            }}
          >
            PAGES TO SUBMIT (ONE URL PER LINE, MUST BE ON TUTOREXEL.COM)
          </label>
          <textarea
            rows={5}
            placeholder={"https://www.tutorexel.com/\nhttps://www.tutorexel.com/pricing\nhttps://www.tutorexel.com/us/subjects"}
            value={urlsText}
            onChange={(e) => setUrlsText(e.target.value)}
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "10px 14px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontFamily: "monospace",
              fontSize: 13,
              lineHeight: 1.5,
              outline: "none",
              color: "#111827",
            }}
          />
        </div>

        {/* Form Options Row */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            padding: "12px 16px",
            background: "#f9fafb",
            borderRadius: 8,
            marginBottom: 20,
          }}
        >
          {/* Notification Type Dropdown */}
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, fontWeight: 500, color: "#374151" }}>Action:</span>
            <select
              value={actionType}
              onChange={(e) => setActionType(e.target.value as "URL_UPDATED" | "URL_DELETED")}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                border: "1px solid #d1d5db",
                fontSize: 13,
                outline: "none",
                background: "#fff",
              }}
            >
              <option value="URL_UPDATED">URL Updated / Added</option>
              <option value="URL_DELETED">URL Deleted</option>
            </select>
          </div>

          {/* Force Checkbox */}
          <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
            <input
              type="checkbox"
              checked={forceSubmit}
              onChange={(e) => setForceSubmit(e.target.checked)}
            />
            <span style={{ fontSize: 13, color: "#374151" }}>
              Force resend (even if unchanged)
            </span>
          </label>
        </div>

        {/* Google Add-on Box */}
        <div
          style={{
            border: "1px solid #fed7aa",
            background: "#fffaf5",
            borderRadius: 10,
            padding: "16px 20px",
            marginBottom: 20,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: status?.googleConfigured ? "pointer" : "not-allowed",
              }}
            >
              <input
                type="checkbox"
                checked={sendToGoogle}
                disabled={!status?.googleConfigured}
                onChange={(e) => setSendToGoogle(e.target.checked)}
              />
              <span style={{ fontSize: 14, fontWeight: 600, color: "#9a3412" }}>
                Also send to Google (Indexing API)
              </span>
            </label>

            <span style={{ fontSize: 12, fontWeight: 600, color: "#9a3412" }}>
              Daily Quota: {status?.quotaUsedToday ?? 0} / {status?.dailyLimit ?? 200} used today
            </span>
          </div>

          {!status?.googleConfigured ? (
            <p style={{ fontSize: 12, color: "#9ca3af", margin: "6px 0 0" }}>
              Disabled: GOOGLE_INDEXING_CLIENT_EMAIL and GOOGLE_INDEXING_PRIVATE_KEY must be set in
              Vercel environment variables.
            </p>
          ) : (
            <>
              <p style={{ fontSize: 12, color: "#7c2d12", margin: "6px 0 10px" }}>
                Notice: Google officially supports the Indexing API only for pages with JobPosting
                or BroadcastEvent (livestream) markup. Default settings only submit pages matching
                /careers/ to prevent quota violations.
              </p>

              {sendToGoogle && (
                <div
                  style={{
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: "1px dashed #fed7aa",
                    display: "flex",
                    flexDirection: "column",
                    gap: 8,
                  }}
                >
                  <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={sendAllToGoogle}
                      onChange={(e) => setSendAllToGoogle(e.target.checked)}
                    />
                    <span style={{ fontSize: 13, fontWeight: 600, color: "#b91c1c" }}>
                      Send all URLs to Google, not recommended (bypass /careers/ filter)
                    </span>
                  </label>

                  {sendAllToGoogle && (
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 4 }}>
                      <span style={{ fontSize: 12, color: "#b91c1c" }}>
                        Type CONFIRM to authorize:
                      </span>
                      <input
                        type="text"
                        placeholder="CONFIRM"
                        value={confirmAllText}
                        onChange={(e) => setConfirmAllText(e.target.value)}
                        style={{
                          padding: "4px 8px",
                          borderRadius: 6,
                          border: "1px solid #f87171",
                          fontSize: 12,
                          fontFamily: "monospace",
                          width: 120,
                        }}
                      />
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>

        {/* Buttons Row */}
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <button
            onClick={handleSubmitUrls}
            disabled={loading}
            style={{
              background: loading ? "#9ca3af" : "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 22px",
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Submitting..." : "Submit URLs"}
          </button>

          <button
            onClick={handleSubmitAllPages}
            disabled={loading}
            style={{
              background: "#fff",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: 8,
              padding: "10px 18px",
              fontSize: 14,
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            Submit all new or changed pages
          </button>
        </div>

        {/* Summary Card */}
        {lastSummary && (
          <div
            style={{
              marginTop: 20,
              padding: 16,
              background: "#f0fdf4",
              borderRadius: 8,
              border: "1px solid #bbf7d0",
            }}
          >
            <div style={{ fontWeight: 600, fontSize: 14, color: "#166534", marginBottom: 6 }}>
              Submission Summary
            </div>
            <pre style={{ margin: 0, fontSize: 12, fontFamily: "monospace", color: "#14532d" }}>
              {JSON.stringify(lastSummary, null, 2)}
            </pre>
          </div>
        )}
      </div>

      {/* Google Metadata Status Check Card */}
      {status?.googleConfigured && (
        <div
          style={{
            background: "#fff",
            borderRadius: 14,
            padding: "20px 28px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
            border: "1px solid #e5e7eb",
          }}
        >
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px", color: "#111827" }}>
            Check Google Indexing Status
          </h3>
          <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 14px" }}>
            Look up the last notification timestamp recorded by Google for a single URL.
          </p>

          <div style={{ display: "flex", gap: 10 }}>
            <input
              type="text"
              placeholder="https://www.tutorexel.com/careers"
              value={metaUrl}
              onChange={(e) => setMetaUrl(e.target.value)}
              style={{
                flex: 1,
                padding: "8px 12px",
                borderRadius: 8,
                border: "1px solid #d1d5db",
                fontSize: 14,
                outline: "none",
              }}
            />
            <button
              onClick={handleCheckGoogleStatus}
              disabled={metaLoading}
              style={{
                background: "#374151",
                color: "#fff",
                border: "none",
                borderRadius: 8,
                padding: "8px 18px",
                fontSize: 13,
                fontWeight: 600,
                cursor: metaLoading ? "not-allowed" : "pointer",
              }}
            >
              {metaLoading ? "Checking..." : "Check Google status"}
            </button>
          </div>

          {metaResult !== null && (
            <div
              style={{
                marginTop: 14,
                padding: 12,
                background: "#f9fafb",
                borderRadius: 6,
                border: "1px solid #e5e7eb",
              }}
            >
              <pre style={{ margin: 0, fontSize: 12, fontFamily: "monospace" }}>
                {JSON.stringify(metaResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Recent Submissions Log Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: "#111827" }}>
            Recent Submissions Log (Last 50)
          </h3>
          <button
            onClick={fetchStatus}
            style={{
              background: "none",
              border: "none",
              color: "#FF6B35",
              cursor: "pointer",
              fontSize: 13,
              fontWeight: 600,
            }}
          >
            Refresh Log
          </button>
        </div>

        {(!status?.history || status.history.length === 0) ? (
          <div style={{ textAlign: "center", padding: "32px 0", color: "#9ca3af", fontSize: 14 }}>
            No recent submissions found in Redis storage.
          </div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                  <th style={{ padding: "8px 10px", color: "#6b7280", fontWeight: 600 }}>URL</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280", fontWeight: 600, width: 160 }}>Time</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280", fontWeight: 600, width: 110 }}>Engine</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280", fontWeight: 600, width: 220 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {status.history.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "10px", fontFamily: "monospace", fontSize: 12, wordBreak: "break-all" }}>
                      {row.url}
                    </td>
                    <td style={{ padding: "10px", color: "#6b7280", whiteSpace: "nowrap" }}>
                      {row.time ? new Date(row.time).toLocaleString() : "-"}
                    </td>
                    <td style={{ padding: "10px" }}>
                      <span
                        style={{
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "2px 8px",
                          borderRadius: 6,
                          background: row.engine === "Both" ? "#eff6ff" : "#f3f4f6",
                          color: row.engine === "Both" ? "#1d4ed8" : "#374151",
                        }}
                      >
                        {row.engine}
                      </span>
                    </td>
                    <td style={{ padding: "10px", color: "#374151", fontSize: 12 }}>
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TAB 2: Sitemap Management
// ─────────────────────────────────────────────────────────────────────────────

function SitemapTab({
  showToast,
}: {
  showToast: (msg: string, isError?: boolean) => void;
}) {
  const [selectedRegion, setSelectedRegion] = useState<RegionCode>("au");
  const [urls, setUrls] = useState<SitemapItem[]>([]);
  const [excludedPaths, setExcludedPaths] = useState<string[]>([]);
  const [customUrls, setCustomUrls] = useState<CustomUrlItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [submittingRegion, setSubmittingRegion] = useState(false);

  // New custom URL form
  const [newCustomUrl, setNewCustomUrl] = useState("");
  const [newCustomLastmod, setNewCustomLastmod] = useState("");

  const loadRegionData = useCallback(async (region: RegionCode) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/seo/sitemap?region=${region}`);
      if (!res.ok) throw new Error("Failed to load sitemap");
      const data = await res.json();
      setUrls(data.urls || []);
      setExcludedPaths(data.excludedPaths || []);
      setCustomUrls(data.customUrls || []);
    } catch {
      showToast("Could not load sitemap data", true);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadRegionData(selectedRegion);
  }, [selectedRegion, loadRegionData]);

  const handleToggleExclude = async (path: string, currentExcluded: boolean) => {
    const nextExcluded = !currentExcluded;
    try {
      const res = await fetch("/api/admin/seo/sitemap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          action: "toggle-exclusion",
          path,
          excluded: nextExcluded,
        }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      setExcludedPaths(data.excludedPaths || []);
      showToast(nextExcluded ? "URL excluded from sitemap" : "URL restored to sitemap");
    } catch {
      showToast("Failed to update exclusion", true);
    }
  };

  const handleAddCustomUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCustomUrl.trim()) return;

    try {
      const res = await fetch("/api/admin/seo/sitemap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          action: "add-custom-url",
          region: selectedRegion,
          loc: newCustomUrl.trim(),
          lastmod: newCustomLastmod.trim() || undefined,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Failed to add URL", true);
        return;
      }

      setCustomUrls(data.customUrls || []);
      setNewCustomUrl("");
      setNewCustomLastmod("");
      showToast("Custom URL added to region sitemap");
      loadRegionData(selectedRegion);
    } catch {
      showToast("Network error adding URL", true);
    }
  };

  const handleRemoveCustomUrl = async (loc: string) => {
    try {
      const res = await fetch("/api/admin/seo/sitemap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          action: "remove-custom-url",
          region: selectedRegion,
          loc,
        }),
      });

      if (!res.ok) throw new Error();
      const data = await res.json();
      setCustomUrls(data.customUrls || []);
      showToast("Custom URL removed");
      loadRegionData(selectedRegion);
    } catch {
      showToast("Failed to remove custom URL", true);
    }
  };

  const handleSubmitRegionIndexNow = async () => {
    setSubmittingRegion(true);
    try {
      const res = await fetch("/api/admin/seo/sitemap", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          action: "submit-region-indexnow",
          region: selectedRegion,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Submission failed", true);
      } else {
        showToast(`Submitted ${data.count} URLs for ${selectedRegion.toUpperCase()} to IndexNow!`);
      }
    } catch {
      showToast("Failed to submit region to IndexNow", true);
    } finally {
      setSubmittingRegion(false);
    }
  };

  const sitemapFilename = `/sitemap-${selectedRegion}.xml`;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Controls & Region Tabs */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "20px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 16,
        }}
      >
        {/* Region Selector */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "#6b7280" }}>REGION:</span>
          {(["au", "us", "ca", "nz"] as const).map((r) => (
            <button
              key={r}
              onClick={() => setSelectedRegion(r)}
              style={{
                padding: "6px 14px",
                borderRadius: 6,
                border: selectedRegion === r ? "1px solid #FF6B35" : "1px solid #d1d5db",
                background: selectedRegion === r ? "#fff7ed" : "#fff",
                color: selectedRegion === r ? "#FF6B35" : "#374151",
                fontWeight: 600,
                fontSize: 13,
                cursor: "pointer",
                textTransform: "uppercase",
              }}
            >
              {r}
            </button>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", gap: 10 }}>
          <a
            href={sitemapFilename}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              background: "#fff",
              color: "#374151",
              border: "1px solid #d1d5db",
              borderRadius: 8,
              padding: "8px 14px",
              fontSize: 13,
              fontWeight: 500,
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span>Open {selectedRegion.toUpperCase()} Sitemap ↗</span>
          </a>

          <button
            onClick={handleSubmitRegionIndexNow}
            disabled={submittingRegion}
            style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 600,
              cursor: submittingRegion ? "not-allowed" : "pointer",
            }}
          >
            {submittingRegion ? "Submitting..." : `Submit ${selectedRegion.toUpperCase()} to IndexNow`}
          </button>
        </div>
      </div>

      {/* Add Custom URL Form */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "20px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 4px", color: "#111827" }}>
          Add Extra Custom URL ({selectedRegion.toUpperCase()})
        </h3>
        <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 14px" }}>
          Append custom URLs that are dynamically added to this region sitemap.
        </p>

        <form onSubmit={handleAddCustomUrl} style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <input
            type="text"
            placeholder="https://www.tutorexel.com/..."
            value={newCustomUrl}
            onChange={(e) => setNewCustomUrl(e.target.value)}
            style={{
              flex: 2,
              minWidth: 260,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 13,
              outline: "none",
            }}
          />

          <input
            type="text"
            placeholder="Lastmod (optional, e.g. 2026-10-26)"
            value={newCustomLastmod}
            onChange={(e) => setNewCustomLastmod(e.target.value)}
            style={{
              flex: 1,
              minWidth: 180,
              padding: "8px 12px",
              borderRadius: 8,
              border: "1px solid #d1d5db",
              fontSize: 13,
              outline: "none",
            }}
          />

          <button
            type="submit"
            style={{
              background: "#374151",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Add URL
          </button>
        </form>

        {customUrls.length > 0 && (
          <div style={{ marginTop: 14 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#6b7280", marginBottom: 6 }}>
              CUSTOM REGION URLS:
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {customUrls.map((item) => (
                <div
                  key={item.loc}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    background: "#f9fafb",
                    padding: "6px 12px",
                    borderRadius: 6,
                    border: "1px solid #e5e7eb",
                    fontSize: 13,
                  }}
                >
                  <span style={{ fontFamily: "monospace" }}>{item.loc}</span>
                  <button
                    onClick={() => handleRemoveCustomUrl(item.loc)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#b91c1c",
                      cursor: "pointer",
                      fontSize: 12,
                      fontWeight: 500,
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* URL List with Exclude Checkbox */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 16 }}>
          <div>
            <h3 style={{ fontSize: 16, fontWeight: 700, margin: 0, color: "#111827" }}>
              Region URLs ({urls.length} pages in {selectedRegion.toUpperCase()} Sitemap)
            </h3>
            <p style={{ fontSize: 13, color: "#6b7280", margin: "4px 0 0" }}>
              Uncheck a URL to exclude it from the sitemap. Exclusions update instantly in Redis with
              a 5-minute public cache.
            </p>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#9ca3af" }}>
            Loading region URLs...
          </div>
        ) : (
          <div style={{ maxHeight: 600, overflowY: "auto", border: "1px solid #f3f4f6", borderRadius: 8 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead style={{ position: "sticky", top: 0, background: "#f9fafb", zIndex: 1 }}>
                <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                  <th style={{ padding: "10px 14px", width: 90, color: "#6b7280" }}>Included</th>
                  <th style={{ padding: "10px 14px", color: "#6b7280" }}>URL</th>
                  <th style={{ padding: "10px 14px", width: 180, color: "#6b7280" }}>Lastmod</th>
                </tr>
              </thead>
              <tbody>
                {urls.map((row) => {
                  const isExcluded = excludedPaths.includes(row.loc);
                  return (
                    <tr
                      key={row.loc}
                      style={{
                        borderBottom: "1px solid #f3f4f6",
                        background: isExcluded ? "#fef2f2" : "transparent",
                      }}
                    >
                      <td style={{ padding: "10px 14px", textAlign: "center" }}>
                        <input
                          type="checkbox"
                          checked={!isExcluded}
                          onChange={() => handleToggleExclude(row.loc, isExcluded)}
                        />
                      </td>
                      <td
                        style={{
                          padding: "10px 14px",
                          fontFamily: "monospace",
                          fontSize: 12,
                          color: isExcluded ? "#9ca3af" : "#111827",
                          textDecoration: isExcluded ? "line-through" : "none",
                        }}
                      >
                        {row.loc}
                      </td>
                      <td style={{ padding: "10px 14px", color: "#6b7280", fontSize: 12 }}>
                        {row.lastmod}
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
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TAB 3: Robots.txt Management
// ─────────────────────────────────────────────────────────────────────────────

function RobotsTab({
  showToast,
}: {
  showToast: (msg: string, isError?: boolean) => void;
}) {
  const [content, setContent] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [history, setHistory] = useState<FileVersion[]>([]);
  const [loading, setLoading] = useState(false);

  // Safety confirmation state
  const [showBlockAllModal, setShowBlockAllModal] = useState(false);
  const [confirmInput, setConfirmInput] = useState("");

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/robots");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setContent(data.current || "");
      setDefaultText(data.defaultText || "");
      setHistory(data.history || []);
    } catch {
      showToast("Failed to load robots.txt", true);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSave = async (bypassConfirm = false) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/robots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({
          action: "save",
          text: content,
          confirmBlockAll: bypassConfirm ? "BLOCK ALL" : confirmInput,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.requiresBlockAllConfirmation) {
          setShowBlockAllModal(true);
        } else {
          showToast(data.error || "Save failed", true);
        }
      } else {
        setShowBlockAllModal(false);
        setConfirmInput("");
        setHistory(data.history || []);
        showToast("robots.txt saved successfully!");
      }
    } catch {
      showToast("Network error saving robots.txt", true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Reset robots.txt to the original site default?")) return;

    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/robots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ action: "reset" }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Reset failed", true);
      } else {
        setContent(data.current || defaultText);
        setHistory(data.history || []);
        showToast("Reset to default robots.txt");
      }
    } catch {
      showToast("Network error resetting robots.txt", true);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (index: number) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/robots", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ action: "restore", restoreIndex: index }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Restore failed", true);
      } else {
        setContent(data.current);
        setHistory(data.history || []);
        showToast("Restored selected version!");
      }
    } catch {
      showToast("Network error restoring version", true);
    } finally {
      setLoading(false);
    }
  };

  const byteLength = new TextEncoder().encode(content).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Editor Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#111827" }}>
              Edit robots.txt
            </h2>
            <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
              Live robots file served at /robots.txt (cached ~5 minutes). Maximum size: 20 KB.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 12,
                color: byteLength > 20480 ? "#b91c1c" : "#6b7280",
                fontWeight: 600,
              }}
            >
              {(byteLength / 1024).toFixed(1)} KB / 20 KB
            </span>

            <a
              href="/robots.txt"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                color: "#FF6B35",
              }}
            >
              View Live ↗
            </a>
          </div>
        </div>

        <textarea
          rows={16}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.5,
            outline: "none",
            color: "#111827",
            marginBottom: 16,
          }}
        />

        {/* Safety Warning Modal / Banner */}
        {showBlockAllModal && (
          <div
            style={{
              background: "#fef2f2",
              border: "1px solid #f87171",
              borderRadius: 8,
              padding: "16px 20px",
              marginBottom: 16,
            }}
          >
            <div style={{ fontWeight: 700, fontSize: 14, color: "#991b1b", marginBottom: 4 }}>
              ⚠️ High Risk: Site Crawling Disallow Detected
            </div>
            <p style={{ fontSize: 13, color: "#7f1d1d", margin: "0 0 10px" }}>
              Your robots.txt contains <code>Disallow: /</code> under <code>User-agent: *</code>.
              This will completely block search engines from crawling TutorExel. Type{" "}
              <strong>BLOCK ALL</strong> below to confirm.
            </p>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <input
                type="text"
                placeholder="BLOCK ALL"
                value={confirmInput}
                onChange={(e) => setConfirmInput(e.target.value)}
                style={{
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "1px solid #dc2626",
                  fontSize: 13,
                  fontFamily: "monospace",
                  width: 140,
                }}
              />
              <button
                onClick={() => handleSave(confirmInput === "BLOCK ALL")}
                disabled={confirmInput !== "BLOCK ALL"}
                style={{
                  background: confirmInput === "BLOCK ALL" ? "#b91c1c" : "#9ca3af",
                  color: "#fff",
                  border: "none",
                  borderRadius: 6,
                  padding: "6px 14px",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: confirmInput === "BLOCK ALL" ? "pointer" : "not-allowed",
                }}
              >
                Confirm and Save
              </button>
            </div>
          </div>
        )}

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={() => handleSave(false)}
            disabled={loading}
            style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Saving..." : "Save robots.txt"}
          </button>

          <button
            onClick={handleReset}
            disabled={loading}
            style={{
              background: "#fff",
              color: "#b91c1c",
              border: "1px solid #fecaca",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Version History Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: "#111827" }}>
          Version History (Last 10 Saved Versions)
        </h3>

        {history.length === 0 ? (
          <div style={{ color: "#9ca3af", fontSize: 13 }}>No previous versions recorded.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                  <th style={{ padding: "8px 10px", color: "#6b7280" }}>Saved At</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280" }}>Preview</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280", width: 90 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {history.map((ver, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "10px", whiteSpace: "nowrap", color: "#4b5563" }}>
                      {new Date(ver.savedAt).toLocaleString()}
                      {ver.note && (
                        <span
                          style={{
                            marginLeft: 8,
                            fontSize: 11,
                            padding: "2px 6px",
                            background: "#f3f4f6",
                            borderRadius: 4,
                          }}
                        >
                          {ver.note}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "10px", fontFamily: "monospace", fontSize: 11, color: "#6b7280" }}>
                      {ver.text.slice(0, 75).replace(/\n/g, " ")}...
                    </td>
                    <td style={{ padding: "10px" }}>
                      <button
                        onClick={() => handleRestore(idx)}
                        disabled={loading}
                        style={{
                          background: "#fff",
                          border: "1px solid #d1d5db",
                          borderRadius: 6,
                          padding: "4px 10px",
                          fontSize: 12,
                          cursor: "pointer",
                          fontWeight: 500,
                        }}
                      >
                        Restore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// TAB 4: LLM file (/llms.txt) Management
// ─────────────────────────────────────────────────────────────────────────────

function LlmsTab({
  showToast,
}: {
  showToast: (msg: string, isError?: boolean) => void;
}) {
  const [content, setContent] = useState("");
  const [defaultText, setDefaultText] = useState("");
  const [history, setHistory] = useState<FileVersion[]>([]);
  const [loading, setLoading] = useState(false);

  const loadData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/llms");
      if (!res.ok) throw new Error();
      const data = await res.json();
      setContent(data.current || "");
      setDefaultText(data.defaultText || "");
      setHistory(data.history || []);
    } catch {
      showToast("Failed to load llms.txt", true);
    } finally {
      setLoading(false);
    }
  }, [showToast]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/llms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ action: "save", text: content }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Save failed", true);
      } else {
        setHistory(data.history || []);
        showToast("llms.txt saved successfully!");
      }
    } catch {
      showToast("Network error saving llms.txt", true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    if (!confirm("Reset llms.txt to the original site default?")) return;

    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/llms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ action: "reset" }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Reset failed", true);
      } else {
        setContent(data.current || defaultText);
        setHistory(data.history || []);
        showToast("Reset to default llms.txt");
      }
    } catch {
      showToast("Network error resetting llms.txt", true);
    } finally {
      setLoading(false);
    }
  };

  const handleRestore = async (index: number) => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/seo/llms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ action: "restore", restoreIndex: index }),
      });

      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || "Restore failed", true);
      } else {
        setContent(data.current);
        setHistory(data.history || []);
        showToast("Restored selected version!");
      }
    } catch {
      showToast("Network error restoring version", true);
    } finally {
      setLoading(false);
    }
  };

  const byteLength = new TextEncoder().encode(content).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      {/* Editor Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
          <div>
            <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 4px", color: "#111827" }}>
              Edit llms.txt
            </h2>
            <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>
              Curated site map and summary served at /llms.txt for AI agents and LLMs. Maximum size: 20 KB.
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span
              style={{
                fontSize: 12,
                color: byteLength > 20480 ? "#b91c1c" : "#6b7280",
                fontWeight: 600,
              }}
            >
              {(byteLength / 1024).toFixed(1)} KB / 20 KB
            </span>

            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                fontSize: 13,
                fontWeight: 600,
                color: "#FF6B35",
              }}
            >
              View Live ↗
            </a>
          </div>
        </div>

        <textarea
          rows={16}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{
            width: "100%",
            boxSizing: "border-box",
            padding: "14px",
            borderRadius: 8,
            border: "1px solid #d1d5db",
            fontFamily: "monospace",
            fontSize: 13,
            lineHeight: 1.5,
            outline: "none",
            color: "#111827",
            marginBottom: 16,
          }}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <button
            onClick={handleSave}
            disabled={loading}
            style={{
              background: "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "10px 24px",
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            {loading ? "Saving..." : "Save llms.txt"}
          </button>

          <button
            onClick={handleReset}
            disabled={loading}
            style={{
              background: "#fff",
              color: "#b91c1c",
              border: "1px solid #fecaca",
              borderRadius: 8,
              padding: "8px 16px",
              fontSize: 13,
              fontWeight: 500,
              cursor: loading ? "not-allowed" : "pointer",
            }}
          >
            Reset to Default
          </button>
        </div>
      </div>

      {/* Version History Table */}
      <div
        style={{
          background: "#fff",
          borderRadius: 14,
          padding: "24px 28px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 12px", color: "#111827" }}>
          Version History (Last 10 Saved Versions)
        </h3>

        {history.length === 0 ? (
          <div style={{ color: "#9ca3af", fontSize: 13 }}>No previous versions recorded.</div>
        ) : (
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid #e5e7eb", textAlign: "left" }}>
                  <th style={{ padding: "8px 10px", color: "#6b7280" }}>Saved At</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280" }}>Preview</th>
                  <th style={{ padding: "8px 10px", color: "#6b7280", width: 90 }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {history.map((ver, idx) => (
                  <tr key={idx} style={{ borderBottom: "1px solid #f3f4f6" }}>
                    <td style={{ padding: "10px", whiteSpace: "nowrap", color: "#4b5563" }}>
                      {new Date(ver.savedAt).toLocaleString()}
                      {ver.note && (
                        <span
                          style={{
                            marginLeft: 8,
                            fontSize: 11,
                            padding: "2px 6px",
                            background: "#f3f4f6",
                            borderRadius: 4,
                          }}
                        >
                          {ver.note}
                        </span>
                      )}
                    </td>
                    <td style={{ padding: "10px", fontFamily: "monospace", fontSize: 11, color: "#6b7280" }}>
                      {ver.text.slice(0, 75).replace(/\n/g, " ")}...
                    </td>
                    <td style={{ padding: "10px" }}>
                      <button
                        onClick={() => handleRestore(idx)}
                        disabled={loading}
                        style={{
                          background: "#fff",
                          border: "1px solid #d1d5db",
                          borderRadius: 6,
                          padding: "4px 10px",
                          fontSize: 12,
                          cursor: "pointer",
                          fontWeight: 500,
                        }}
                      >
                        Restore
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
