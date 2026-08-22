import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Karla } from "next/font/google";
import "./globals.css";

const karla = Karla({
  variable: "--font-karla",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  variable: "--font-dm-serif-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://insure-landing-page.abdelrhman-ahmed8881.workers.dev";

const name = "Insure";
const title = `${name} | Humanizing your insurance`;
const description =
  "Humanizing your insurance. Get your life insurance coverage easier and faster, with a plan that is right for you.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "Insure, life insurance built around the people it protects.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: name,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${karla.variable} ${dmSerifDisplay.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col">{children}</body>
    </html>
  );
}
