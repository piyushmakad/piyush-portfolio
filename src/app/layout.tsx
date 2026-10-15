import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Piyush Makad — Backend Engineer | Distributed Systems", template: "%s — Piyush Makad" },
  description: "Backend engineer building reliable messaging infrastructure, event-driven services, and fast data access at production scale.",
  openGraph: { title: "Piyush Makad — Backend Engineer", description: "Messaging infrastructure, event-driven systems, and production reliability.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
