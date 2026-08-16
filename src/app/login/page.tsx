import { Metadata } from "next";
import { LOGIN_URL } from "@/utils/externalLinks";
import "./login.css";

export const metadata: Metadata = {
  title: "Login | TutorExel",
  description: "Login to your TutorExel student portal to access lessons, worksheets, and progress reports.",
};

export default function LoginPage() {
  return (
    <section className="login-page">
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
