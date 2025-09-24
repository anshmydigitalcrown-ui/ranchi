import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ranchi - Pink Themed Website",
  description: "A beautiful pink-themed Next.js website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}