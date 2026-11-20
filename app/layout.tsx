import type { Metadata, Viewport } from "next";
import "./globals.css";

const siteUrl = "https://mythtech-001-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MYTHTECH001 | Websites & booking systems for Western Sydney",
  description: "Fast, thoughtful websites and booking systems for restaurants, cafes and local businesses in Western Sydney. Designed and built by Sehaj.",
  applicationName: "MYTHTECH001",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "MYTHTECH001",
    title: "MYTHTECH001 | Websites & booking systems for Western Sydney",
    description: "Thoughtful websites, booking systems and ongoing care for local businesses in Western Sydney.",
    locale: "en_AU",
    images: [{ url: "/images/sq-dining.png", width: 1024, height: 768, alt: "Warm restaurant dining room at SQ Bar & Grill" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MYTHTECH001 | Websites for Western Sydney businesses",
    description: "Websites and booking systems for restaurants, cafes and local businesses in Western Sydney.",
    images: ["/images/sq-dining.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b0f0d",
};

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MYTHTECH001",
  url: siteUrl,
  description: "Web design, development, booking systems and ongoing website care for businesses in Western Sydney, Australia.",
  areaServed: { "@type": "AdministrativeArea", name: "Western Sydney, Australia" },
  founder: { "@type": "Person", name: "Sehaj" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-AU" data-theme="dark">
      <body>
        <a className="skip-link" href="#main">Skip to content</a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
