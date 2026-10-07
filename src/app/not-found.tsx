import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "120px 20px" }}>
      <h1 style={{ fontSize: "48px", fontWeight: 700, marginBottom: "16px" }}>404</h1>
      <h2 style={{ fontSize: "24px", fontWeight: 600, marginBottom: "24px" }}>Page Not Found</h2>
      <p style={{ color: "#64748B", marginBottom: "32px" }}>
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          display: "inline-block",
          padding: "12px 28px",
          backgroundColor: "#2563EB",
          color: "#FFFFFF",
          borderRadius: "8px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Return Home
      </Link>
    </div>
  );
}
