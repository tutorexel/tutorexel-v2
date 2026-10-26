import { Poppins } from "next/font/google";
import "@/app/globals.css";
import ConditionalChrome from "@/components/layout/ConditionalChrome";
import FreeTrialModalProvider from "@/components/layout/FreeTrialModalProvider";
import CountrySwitcher from "@/components/shared/CountrySwitcher";
import JsonLd from "@/components/seo/JsonLd";
import { websiteSchema } from "@/utils/schema";
import Analytics from "@/components/layout/Analytics";

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
      <head>
        <Analytics />
      </head>
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
