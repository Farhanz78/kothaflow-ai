import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KothaFlow AI — Human-like AI Call Center",
  description: "Bangladesh-first, global AI voice agent platform for support, bookings, sales, and reception.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
