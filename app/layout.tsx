import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LOADZY | Truck Booking & Transport Services in South India",
  description:
    "Book trucks for house shifting, packers & movers, commercial loads and freight transport across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh and Telangana with LOADZY.",

  metadataBase: new URL("https://www.loadzyinfra.in"),

  keywords: [
    "truck booking",
    "truck booking South India",
    "transport services",
    "truck transport Tamil Nadu",
    "truck booking Tamil Nadu",
    "packers and movers",
    "house shifting",
    "freight transport",
    "load transport",
    "LOADZY",
  ],

  alternates: {
    canonical: "https://www.loadzyinfra.in",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "LOADZY | Truck Booking & Transport Services in South India",
    description:
      "Book trucks for house shifting, packers & movers, commercial loads and freight transport across Tamil Nadu, Karnataka, Kerala, Andhra Pradesh and Telangana with LOADZY.",
    url: "https://www.loadzyinfra.in",
    siteName: "LOADZY",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LOADZY - Truck Booking & Transport Services",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "LOADZY | Truck Booking & Transport Services in South India",
    description:
      "Book trucks for house shifting, packers & movers, commercial loads and freight transport across South India with LOADZY.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
