import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ADMIN_COOKIE_NAME, verifySessionToken } from "@/lib/admin-auth";
import { checkRedisStatus } from "@/lib/admin-redis";
import AdminHeader from "@/components/admin/AdminHeader";
import AdminLogin from "@/components/admin/AdminLogin";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const isAuthed = verifySessionToken(sessionToken);
  const redisConnected = await checkRedisStatus();

  if (!isAuthed) {
    return <AdminLogin />;
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f0f4f8" }}>
      <AdminHeader redisConnected={redisConnected} />
      <main>{children}</main>
    </div>
  );
}
