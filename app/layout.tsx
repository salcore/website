import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./fonts.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salcore AI — The AI Processing Unit of UoS",
  description:
    "A project-driven AI engineering community at the University of Salford. Building real systems and cultivating industry-ready engineers.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
