import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | CACFP Free",
    default: "CACFP Free — Free CACFP tools for daycare providers",
  },
  description:
    "Free CACFP tools for daycare providers. Time reports, receipt processing, and compliance software. No app to download. Audit-ready.",
  applicationName: "CACFP Free",
  openGraph: {
    type: "website",
    siteName: "CACFP Free",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/icons/icon-180.png", sizes: "180x180" },
      { url: "/icons/icon-152.png", sizes: "152x152" },
    ],
  },
  manifest: "/manifest.json",
  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "CACFP Free",
    "format-detection": "telephone=no",
    "msapplication-TileColor": "#48195d",
    "msapplication-tap-highlight": "no",
  },
};

export const viewport: Viewport = {
  themeColor: "#48195d",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* iOS splash screens */}
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-1179x2556.png"
          media="(device-width: 393px) and (device-height: 852px) and (-webkit-device-pixel-ratio: 3)"
        />
        <link
          rel="apple-touch-startup-image"
          href="/splash/splash-750x1334.png"
          media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          dangerouslySetInnerHTML={{
            __html: `if('serviceWorker'in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js');})}`,
          }}
        />
      </body>
    </html>
  );
}
