import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Piyush Makad — Backend, Full-Stack & Distributed Systems Engineer", template: "%s — Piyush Makad" },
  description: "Full-stack engineer building reliable messaging platforms, high-throughput backend systems, and practical AI products at production scale.",
  openGraph: { title: "Piyush Makad — Backend & Full-Stack Engineer", description: "Reliable messaging, high-throughput backend systems, and practical AI products.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
