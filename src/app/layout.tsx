import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mersinyazilim.vercel.app"),
  title: {
    default: "Mersin Yazılım",
    template: "%s | Mersin Yazılım",
  },
  description:
    "Mersin’de web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri. Sade, hızlı ve güven veren dijital yapı.",
  applicationName: "Mersin Yazılım",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://mersinyazilim.vercel.app",
    siteName: "Mersin Yazılım",
    title: "Mersin Yazılım",
    description:
      "Mersin’de web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri. Sade, hızlı ve güven veren dijital yapı.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Mersin Yazılım",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mersin Yazılım",
    description:
      "Mersin’de web sitesi, Google Haritalar işletme kaydı ve temel SEO çözümleri. Sade, hızlı ve güven veren dijital yapı.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
