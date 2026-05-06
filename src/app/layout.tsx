import type { Metadata } from "next";
import { Chivo, JetBrains_Mono, Public_Sans } from "next/font/google";

import "./globals.css";

import { SiteFooter } from "@/components/shared/site-footer";
import { SiteHeader } from "@/components/shared/site-header";
import { createMetadata } from "@/lib/metadata";
import { buildPersonJsonLd, buildWebsiteJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

const bodyFont = Public_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const headingFont = Chivo({
  variable: "--font-display",
  subsets: ["latin"],
});

const monoFont = JetBrains_Mono({
  variable: "--font-code",
  subsets: ["latin"],
});

export const metadata: Metadata = createMetadata({});

const websiteJsonLd = buildWebsiteJsonLd();
const personJsonLd = buildPersonJsonLd();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={cn(
        "h-full scroll-smooth antialiased",
        bodyFont.variable,
        headingFont.variable,
        monoFont.variable,
      )}
    >
      <body className="min-h-full bg-[color:var(--color-background)] font-sans text-[color:var(--color-foreground)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(185,150,82,0.12),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(78,116,173,0.11),transparent_24%)]" />
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-25 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:6rem_6rem]" />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
