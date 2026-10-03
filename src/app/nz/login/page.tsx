import { buildMetadata } from "@/utils/seo";
import { LOGIN_URL } from "@/utils/externalLinks";
import "./login.css";

export const metadata = buildMetadata({
  path: "/login",
  region: "nz",
  noindex: true,
});

export default function LoginPage() {
  return (
    <section className="login-page">
      <h1 className="sr-only">Student Portal Login</h1>
      <div className="login-page__wrapper">
        <iframe
          src={LOGIN_URL}
          className="login-page__iframe"
          title="TutorExel Student Login"
          loading="lazy"
        />
      </div>
    </section>
  );
}
