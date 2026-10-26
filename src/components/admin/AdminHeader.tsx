"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

interface AdminHeaderProps {
  redisConnected: boolean;
}

export default function AdminHeader({ redisConnected }: AdminHeaderProps) {
  const pathname = usePathname();
  const router = useRouter();
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    setLoggingOut(true);
    try {
      await fetch("/api/admin/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-action": "1",
        },
      });
      // Clear legacy session storage as well
      sessionStorage.removeItem("te_coupon_pwd");
      sessionStorage.removeItem("te_admin_pwd");
      router.refresh();
      window.location.href = "/admin";
    } catch {
      window.location.href = "/admin";
    }
  };

  const navItems = [
    { label: "SEO Tools", href: "/admin", exact: true },
    { label: "Submissions", href: "/admin/submissions", exact: false },
    { label: "Coupons", href: "/admin/coupon", exact: false },
    { label: "Geo Guard", href: "/admin/geo", exact: false },
  ];

  const isActive = (href: string, exact: boolean) => {
    if (exact) return pathname === href;
    return pathname.startsWith(href);
  };

  return (
    <header
      style={{
        background: "#fff",
        borderBottom: "1px solid #e5e7eb",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}
    >
      {!redisConnected && (
        <div
          style={{
            background: "#fee2e2",
            color: "#991b1b",
            padding: "8px 24px",
            fontSize: 13,
            fontWeight: 600,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            borderBottom: "1px solid #fecaca",
          }}
        >
          <span>⚠️</span>
          <span>
            Redis KV store is unreachable or not configured. Public routes are serving built-in
            defaults. Changes made in the admin panel may not persist until Redis is connected.
          </span>
        </div>
      )}

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 60,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <Link
            href="/admin"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 8,
              color: "#111827",
              fontWeight: 700,
              fontSize: 16,
            }}
          >
            <span style={{ fontSize: 20 }}>⚙️</span>
            <span>TutorExel Admin</span>
          </Link>

          <nav style={{ display: "flex", gap: 6 }}>
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    textDecoration: "none",
                    padding: "6px 14px",
                    borderRadius: 8,
                    fontSize: 14,
                    fontWeight: active ? 600 : 500,
                    color: active ? "#FF6B35" : "#4b5563",
                    background: active ? "#fff7ed" : "transparent",
                    transition: "all 0.15s ease",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div>
          <button
            onClick={handleLogout}
            disabled={loggingOut}
            style={{
              background: "#fff",
              color: "#b91c1c",
              border: "1px solid #fecaca",
              borderRadius: 8,
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 500,
              cursor: loggingOut ? "not-allowed" : "pointer",
              transition: "all 0.15s ease",
            }}
          >
            {loggingOut ? "Signing out..." : "Log Out"}
          </button>
        </div>
      </div>
    </header>
  );
}
