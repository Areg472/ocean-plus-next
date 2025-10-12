import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { createMetadata } from "@/lib/metadata";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { RouteLogger } from "@/components/RouteLogger";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({ image: "/logo.jpg" });

const HEAP_ID = process.env.NEXT_PRIVATE_HEAP_ID ?? null;
const IS_PRODUCTION = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} antialiased dark`}>
        <SpeedInsights />
        <RouteLogger />
        {IS_PRODUCTION && HEAP_ID && (
          <Script
            id="heap-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};heap.load("${HEAP_ID}");`,
            }}
          />
        )}

        {children}
      </body>
    </html>
  );
}
