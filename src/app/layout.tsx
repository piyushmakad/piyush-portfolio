import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Piyush Makad — Full Stack AI Engineer", template: "%s — Piyush Makad" },
  description: "Full Stack AI Engineer shipping production LLM products, React interfaces, and high-volume backend systems.",
  openGraph: { title: "Piyush Makad — Full Stack AI Engineer", description: "Production AI products backed by reliable, high-volume systems.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
