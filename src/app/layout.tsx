import type { Metadata } from "next";
import { Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gospelpillars.org"),
  title: "Gospel Pillars Church Ikeja | The Ark of Light for All Nations",
  description:
    "Welcome to Gospel Pillars Church Ikeja, The Ark of Light for All Nations. Global headquarters founded by Prophet Dr. Isaiah Macwealth and Prophetess Lily Anita Macwealth at Plot 11 Kudirat Abiola Way, Alausa, Ikeja, Lagos.",
  keywords: [
    "Gospel Pillars Church",
    "Gospel Pillars Ikeja",
    "The Ark of Light for All Nations",
    "Prophet Isaiah Macwealth",
    "Prophetess Lily Anita Macwealth",
    "Church in Ikeja",
    "Alausa Lagos Church",
    "OneSound Revival TV"
  ],
  icons: {
    icon: "/images/gpc_logo.png",
    apple: "/images/gpc_logo.png"
  },
  openGraph: {
    title: "Gospel Pillars Church Ikeja | The Ark of Light for All Nations",
    description:
      "Experience the manifest glory of God in The Ark of Light for All Nations. Sunday worship at 8:00 AM & 9:15 AM.",
    url: "https://gospelpillars.org",
    siteName: "Gospel Pillars Church Ikeja",
    images: [
      {
        url: "/images/ark_of_light.webp",
        width: 1200,
        height: 630,
        alt: "The Ark of Light Ikeja"
      }
    ],
    locale: "en_US",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${montserrat.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        {/* Google Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body
        className="bg-[#f8f9ff] text-[#0b1c30] antialiased selection:bg-[#f59e0b] selection:text-[#070d1a]"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
