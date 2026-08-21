import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
import FreeTrialModalProvider from "@/components/layout/FreeTrialModalProvider";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema, reviewSchema } from "@/utils/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tutorexel.com"),
  title: "TutorExel - Australian Online Tutoring Excellence",
  description:
    "Live online tutoring with Australian curriculum-aligned classes. Experienced teachers. Free trial class available.",
  openGraph: {
    siteName: "TutorExel",
    locale: "en",
    type: "website",
    images: [
      {
        url: "/images/banner/og-image.webp",
        width: 1200,
        height: 630,
        alt: "TutorExel - Australian Online Tutoring",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/banner/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C2VFSLJF3K"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-C2VFSLJF3K');`}
      </Script>
      {/* Microsoft Clarity */}
      <Script id="clarity" strategy="afterInteractive">
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "w62nmvsa68");`}
      </Script>
      {/* Google Tag Manager */}
      <Script id="gtm" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PT9K2JV3');`}
      </Script>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PT9K2JV3"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <JsonLd data={reviewSchema} />
        <FreeTrialModalProvider>
          <ConditionalChrome>{children}</ConditionalChrome>
        </FreeTrialModalProvider>
      </body>
    </html>
  );
}
