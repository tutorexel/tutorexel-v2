import { Poppins } from "next/font/google";
import Script from "next/script";
import "@/app/globals.css";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
import FreeTrialModalProvider from "@/components/layout/FreeTrialModalProvider";
import CountrySwitcher from "@/components/shared/CountrySwitcher";
import JsonLd from "@/components/seo/JsonLd";
import { websiteSchema } from "@/utils/schema";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

interface RootLayoutBaseProps {
  lang: string;
  children: React.ReactNode;
}

export default function RootLayoutBase({ lang, children }: RootLayoutBaseProps) {
  return (
    <html lang={lang} className={poppins.variable} suppressHydrationWarning>
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
})(window,document,'script','dataLayer','GTM-PW3LW3FT');`}
      </Script>
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{function c(){if(document.body&&document.body.hasAttribute('cz-shortcut-listen')){document.body.removeAttribute('cz-shortcut-listen');}}c();if(typeof MutationObserver!=='undefined'){new MutationObserver(c).observe(document.documentElement,{attributes:true,subtree:true});}}catch(e){}})();`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PW3LW3FT"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <JsonLd data={websiteSchema} />
        <FreeTrialModalProvider>
          <ConditionalChrome>{children}</ConditionalChrome>
          <CountrySwitcher />
        </FreeTrialModalProvider>
      </body>
    </html>
  );
}
