import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recognizer",
  description: "Facial recognition system",
  icons: {
    apple: ["/images/favicons/apple-icon.png"], // Fix: Add the 'appleTouchIcon' property with the correct value
    icon: ["/images/favicons/favicon.ico?v4"],
    shortcut: ["/images/favicons/apple-icon.png?v4"],
  },
  manifest: "/images/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
