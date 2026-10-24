import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enzo Cafe — Crafted Moments, Elevated Coffee",
  description:
    "A premium specialty café in the UAE where every cup is a crafted moment. Experience specialty coffee, matcha, handcrafted desserts, and elevated ambiance.",
  keywords: [
    "Enzo Cafe",
    "specialty coffee UAE",
    "luxury cafe Dubai",
    "matcha latte",
    "premium cafe",
    "artisan coffee",
  ],
  openGraph: {
    title: "Enzo Cafe — Crafted Moments, Elevated Coffee",
    description:
      "A premium specialty café in the UAE. Experience specialty coffee, matcha, and elevated ambiance.",
    type: "website",
    locale: "en_AE",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F0E0D",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full antialiased bg-charcoal text-cream overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
