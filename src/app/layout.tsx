import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Apex Interventional Psychiatry | TMS & Spravato®",
  description:
    "FDA-cleared TMS and FDA-approved Spravato® for treatment-resistant depression, anxiety, and OCD. Four Connecticut locations plus telehealth. Find out if you qualify. Call (860) 799-8344.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/apple-touch-icon.png",
  },
  keywords: [
    "Apex Interventional Psychiatry",
    "TMS Connecticut",
    "Spravato CT",
    "treatment-resistant depression",
    "BrainsWay TMS",
    "Torrington psychiatry",
    "Waterbury psychiatry",
  ],
  openGraph: {
    title: "Apex Interventional Psychiatry | TMS & Spravato®",
    description:
      "See if you qualify for FDA-cleared TMS or FDA-approved Spravato®. Compassionate integrative care across Connecticut.",
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c3060",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
        <Script src="https://go.4tms.com/js/form_embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
