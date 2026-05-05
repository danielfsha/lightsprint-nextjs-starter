import type { Metadata, Viewport } from "next";

export const SITE_MANIFEST = {
  name: "Lightsprint Next.js starter",
  short_name: "Lightsprint starter",
  description:
    "Plan visually, preview live, ship production-ready code. Spin up your next Lightsprint app from this template to start sprinting.",
  start_url: "/",
  display: "standalone" as const,
  background_color: "#fcfcfc",
  theme_color: "#111113",
  icons: [],
  url: "https://www.lightsprint.ai",
  author: {
    name: "",
    twitter: "",
    url: "",
    email: "",
  },
  github: "",
};

export const METADATA: Metadata = {
  metadataBase: new URL(SITE_MANIFEST.url),
  title: {
    default: SITE_MANIFEST.name,
    template: `%s`,
  },
  description: SITE_MANIFEST.description,
  icons: {},
  keywords: ["", "", "", "", "", "", ""],
  creator: SITE_MANIFEST.author.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_MANIFEST.url,
    siteName: SITE_MANIFEST.name,
    title: SITE_MANIFEST.name,
    description: SITE_MANIFEST.description,
    images: [],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_MANIFEST.name,
    description: SITE_MANIFEST.description,
    creator: SITE_MANIFEST.author.twitter,
    images: [""],
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
  alternates: {
    canonical: SITE_MANIFEST.url,
    types: {
      "application/rss+xml": `${SITE_MANIFEST.url}/feed.xml`,
    },
  },
};

export const VIEWPORT: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: SITE_MANIFEST.theme_color },
    {
      media: "(prefers-color-scheme: light)",
      color: SITE_MANIFEST.background_color,
    },
  ],
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};
