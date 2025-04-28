import "./globals.css";
import { inter } from "@/config/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";

export const metadata = {
  title: "Carolina Restoration Solutions | Water Damage Restoration Experts",
  description:
    "Carolina Restoration Solutions provides professional water damage restoration, flood cleanup, and mold remediation services. 24/7 emergency response. Trusted experts in Carolina.",
  keywords: [
    "water damage restoration",
    "flood cleanup",
    "mold remediation",
    "water extraction",
    "carolina restoration",
    "emergency water damage",
    "water restoration company",
  ],
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://carolinarestorationsolutions.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ]
  },
  openGraph: {
    title: "Carolina Restoration Solutions | Water Damage Restoration Experts",
    description:
      "Professional water damage restoration, flood cleanup, and mold remediation services with 24/7 emergency response in Carolina.",
    url: "https://carolinarestorationsolutions.com",
    siteName: "Carolina Restoration Solutions",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={cn("min-h-screen", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-10984499359"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-10984499359');

            gtag('event', 'ads_conversion_Contact_1', {
              // event parameters
            });
          `}
        </Script>
      </body>
    </html>
  );
}
