import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
    template: "%s | Ainslie Park Garage"
  },
  description: "Professional car servicing, MOT testing, and repairs in the heart of Edinburgh since 1975. Edinburgh's most trusted auto repair service with expert mechanics and competitive prices.",
  keywords: [
    "car repair Edinburgh",
    "MOT testing Edinburgh",
    "car servicing Edinburgh",
    "auto repair Edinburgh",
    "garage Edinburgh",
    "vehicle maintenance Edinburgh",
    "brake repair Edinburgh",
    "exhaust repair Edinburgh",
    "clutch repair Edinburgh",
    "engine diagnostics Edinburgh",
    "Ainslie Park Garage",
    "Edinburgh garage",
    "trusted mechanic Edinburgh"
  ],
  authors: [{ name: "Ainslie Park Garage" }],
  creator: "Ainslie Park Garage",
  publisher: "Ainslie Park Garage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ainslieparkgarage.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://ainslieparkgarage.com",
    title: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
    description: "Professional car servicing, MOT testing, and repairs in the heart of Edinburgh since 1975. Edinburgh's most trusted auto repair service.",
    siteName: "Ainslie Park Garage",
    images: [
      {
        url: "/hero-workshop.jpg",
        width: 1200,
        height: 630,
        alt: "Ainslie Park Garage - Professional Auto Repair in Edinburgh",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ainslie Park Garage | Trusted Auto Repair Edinburgh",
    description: "Professional car servicing, MOT testing, and repairs in the heart of Edinburgh since 1975.",
    images: ["/hero-workshop.jpg"],
    creator: "@ainslieparkgarage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  applicationName: "Ainslie Park Garage",
  referrer: "origin-when-cross-origin",
  category: "automotive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
