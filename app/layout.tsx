import type { Metadata } from "next";
import { IBM_Plex_Serif, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const plexSerif = IBM_Plex_Serif({
  variable: "--font-plex-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phull Insights — Operations advisory and technology practice",
  description:
    "Phull Insights is an operations advisory and technology practice for supply chains that can't afford to guess: regulated manufacturing, medtech distribution, and multi-site networks under pressure to perform.",
  metadataBase: new URL("https://phullinsights.com"),
  openGraph: {
    title: "Phull Insights",
    description:
      "Operations advisory and technology for supply chains that can't afford to guess.",
    url: "https://phullinsights.com",
    siteName: "Phull Insights",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plexSerif.variable} ${plexSans.variable} antialiased flex min-h-screen flex-col`}
      >
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
