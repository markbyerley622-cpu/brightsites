import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bright Site Websites | Modern AI-Powered Web Development for Aussie Businesses",
  description:
    "Professional, fast, AI-powered websites built for Australian small businesses. From $500 one-off builds to $79/month managed plans.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
