import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/src/data/profile";
import { SkipLink } from "@/components/SkipLink";

export const metadata: Metadata = {
  metadataBase: new URL(profile.meta.url),
  title: profile.meta.title,
  description: profile.meta.description,
  openGraph: {
    type: "website",
    title: profile.meta.title,
    description: profile.meta.description,
    url: profile.meta.url,
    siteName: profile.meta.siteName,
    images: [{ url: profile.meta.ogImage, width: 1200, height: 630, alt: profile.meta.siteName }]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        {children}
      </body>
    </html>
  );
}
