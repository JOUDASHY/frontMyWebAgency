// app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import "./globals.css";           // <-- votre CSS global
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Thebeast | Web Agency",
  description:
    "Tolotra – Visionnaire multilingue et spécialiste en communication : éducation, collaboration globale et inter-culturalité.",
  keywords: [
    "Tolotra",
    "Multilingual",
    "Communication",
    "Madagascar",
    "Éducation",
    "Langues",
    "Cross-cultural",
  ],
  authors: [{ name: "Tolotra" }],
  alternates: {
    canonical: "https://portfolio-tolotra.onrender.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Tolotra | Web Agency",
    description:
      "Visionnaire multilingue spécialisé en éducation et communication interculturelle à Madagascar.",
    url: "https://portfolio-tolotra.onrender.com/",
    siteName: "Tolotra Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://portfolio-tolotra.onrender.com/cv1.jpeg",
        width: 1200,
        height: 630,
        alt: "Portrait de Tolotra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolotra | Communication & Langues",
    description:
      "Spécialiste multilingue en communication interculturelle et éducation.",
    images: ["https://portfolio-tolotra.onrender.com/cv2.jpeg"],
    creator: "@votre_handle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* Next.js se charge de vos meta via export const metadata */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind CDN (optionnel : mieux de l’installer en prod) */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    fontFamily: {
                      geist: ['Geist', 'sans-serif'],
                      'geist-mono': ['Geist Mono', 'monospace'],
                    },
                  },
                },
              }
            `,
          }}
        />

        {/* JSON-LD pour schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Tolotra",
              birthDate: "2003-12-01",
              url: "https://portfolio-tolotra.onrender.com/",
              sameAs: [
                "https://www.linkedin.com/in/eddie-tolotra-alitsiry-766050263",
                "https://www.facebook.com/nirina.sarah.96",
              ],
              jobTitle: "Communication & Language Specialist",
              description:
                "Visionnaire multilingue spécialisé en communication interculturelle et éducation à Madagascar.",
              nationality: "Madagascar",
              knowsLanguage: ["fr", "en", "es", "ru"],
            }),
          }}
        />
      </head>
      <body className="antialiased font-geist">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
