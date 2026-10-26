"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the admin password.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || `Login failed (HTTP ${res.status})`);
        setLoading(false);
        return;
      }

      if (onLoginSuccess) {
        onLoginSuccess();
      } else {
        router.refresh();
      }
    } catch {
      setError("Connection error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f0f4f8",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: 16,
          padding: "40px 36px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
          width: "100%",
          maxWidth: 420,
        }}
      >
        <div style={{ fontSize: 32, marginBottom: 8 }}>🔒</div>
        <h1 style={{ fontSize: 22, fontWeight: 700, color: "#111827", marginBottom: 4 }}>
          TutorExel Admin
        </h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 24 }}>
          Enter the secure admin password to access site management and SEO tools.
        </p>

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: 16 }}>
            <label
              style={{
                fontSize: 12,
                fontWeight: 600,
                color: "#6b7280",
                marginBottom: 6,
                display: "block",
              }}
            >
              ADMIN PASSWORD
            </label>
            <input
              type="password"
              placeholder="Enter master password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              style={{
                width: "100%",
                boxSizing: "border-box",
                padding: "10px 14px",
                border: "1px solid #d1d5db",
                borderRadius: 8,
                fontSize: 14,
                outline: "none",
                color: "#111827",
                background: "#fff",
                height: 42,
              }}
            />
          </div>

          {error && (
            <div
              style={{
                background: "#fee2e2",
                color: "#b91c1c",
                borderRadius: 8,
                padding: "10px 14px",
                fontSize: 13,
                marginBottom: 16,
                lineHeight: 1.4,
              }}
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: loading ? "#9ca3af" : "#FF6B35",
              color: "#fff",
              border: "none",
              borderRadius: 8,
              padding: "11px 18px",
              fontSize: 14,
              fontWeight: 600,
              cursor: loading ? "not-allowed" : "pointer",
              width: "100%",
              transition: "background 0.2s ease",
            }}
          >
            {loading ? "Authenticating..." : "Sign In to Admin Panel"}
          </button>
        </form>
      </div>
    </div>
  );
}
