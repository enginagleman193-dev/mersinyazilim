import Script from "next/script";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mersinyazilim.com"),
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
    url: "https://mersinyazilim.com",
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
      <body>
        {/* Google Analytics - G-0B7N1S0BJH */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0B7N1S0BJH"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0B7N1S0BJH');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
