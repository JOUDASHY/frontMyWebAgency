// app/layout.tsx
import React from "react";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "TheBeast | Agence Web Professionnelle",
  description:
    "TheBeast - Agence web spécialisée dans la création de sites internet, applications web et portfolios professionnels. Solutions digitales sur mesure pour votre entreprise.",
  keywords: [
    "Agence web",
    "Création site internet",
    "Développement web",
    "Portfolio professionnel",
    "Site vitrine",
    "E-commerce",
    "Responsive design",
    "UX/UI design",
    "SEO",
  ],
  authors: [{ name: "TheBeast Web Agency" }],
  alternates: {
    canonical: "https://thebeast-webagency.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TheBeast | Agence Web Professionnelle",
    description:
      "Votre partenaire digital pour la création de sites web, applications et portfolios qui convertissent. Expertise technique et créative au service de votre succès.",
    url: "https://thebeast-webagency.com/",
    siteName: "TheBeast Web Agency",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://thebeast-webagency.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TheBeast Web Agency - Création de sites web et portfolios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheBeast | Création de Sites Web & Portfolios",
    description:
      "Agence web spécialisée dans le développement de solutions digitales sur mesure. Transformez votre présence en ligne avec nos experts.",
    images: ["https://thebeast-webagency.com/twitter-card.jpg"],
    creator: "@TheBeastAgency",
  },
  icons: {
    // icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-ESLH7743NR`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ESLH7743NR', {
                page_path: window.location.pathname,
                anonymize_ip: true,
                cookie_flags: 'SameSite=None;Secure'
              });
            `,
          }}
        />

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
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400&display=swap"
          rel="stylesheet"
        />

        {/* Tailwind CDN */}
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
              "@type": "Organization",
              name: "TheBeast Web Agency",
              url: "https://thebeast-webagency.com/",
              logo: "https://thebeast-webagency.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/thebeast-webagency",
                "https://www.facebook.com/thebeastwebagency",
                "https://www.instagram.com/thebeastwebagency",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+261348655523",
                contactType: "customer service",
                availableLanguage: ["French", "English"],
              },
              description: "Agence web spécialisée dans la création de sites internet, applications web et portfolios professionnels.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Fianarantsoa",
                addressLocality: "Madagascar",
                postalCode: "301",
                addressCountry: "MG"
              },
              services: [
                "Création de sites web",
                "Développement d'applications",
                "Conception de portfolios",
                "Référencement SEO",
                "Webdesign",
                "Maintenance web"
              ]
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