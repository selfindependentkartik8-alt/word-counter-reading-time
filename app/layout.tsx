import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://wordcounterreadingtime.krishaiworks.com"
  ),

  title: "Word Counter & Reading Time Calculator | Count Words Online",

  description:
    "Count words, characters, sentences, and paragraphs online with the free Word Counter & Reading Time Calculator by KrishAIWorks. Get an estimated reading time instantly.",

  keywords: [
    "Word Counter",
    "Word Counter Online",
    "Free Word Counter",
    "Character Counter",
    "Reading Time Calculator",
    "Reading Time Calculator Online",
    "Word Count Tool",
    "Online Word Counter",
    "Count Words Online",
    "Character Count",
    "Text Counter",
    "Reading Time Calculator Free",
  ],

  authors: [
    {
      name: "KrishAIWorks",
      url: "https://krishaiworks.vercel.app",
    },
  ],

  creator: "KrishAIWorks",
  publisher: "KrishAIWorks",

  alternates: {
    canonical:
      "https://wordcounterreadingtime.krishaiworks.com/",
  },

  openGraph: {
    title: "Word Counter & Reading Time Calculator | KrishAIWorks",
    description:
      "Count words and characters and calculate reading time instantly with the free online tool by KrishAIWorks.",
    url: "https://wordcounterreadingtime.krishaiworks.com/",
    siteName: "KrishAIWorks",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Word Counter & Reading Time Calculator | KrishAIWorks",
    description:
      "Count words, characters, and calculate estimated reading time online.",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BS6TSMM1ZR"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-BS6TSMM1ZR');
          `}
        </Script>
      </body>
    </html>
  );
}