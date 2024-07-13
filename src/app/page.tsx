import { Metadata } from "next";
import Image from "next/image";
import "./globals.css";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import Navbar from "@/components/Navbar/Navbar";
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
export default function Home() {
  return (
    <main className="bg-background flex min-h-screen flex-col items-center text-white w-full">
      <Navbar />
      <section className="flex flex-col items-center pt-8 justify-center w-full h-full">
        <h1 className="text-4xl font-bold">Facial recognition system </h1>
        <p className="mt-5 text-lg ">
          Max image size after processing: 25 megapixels
        </p>
      </section>
      <h1 className="mt-5 text-2xl font-mono text-red-400 border p-4 border-blue-500">
        Hello world
      </h1>
    </main>
  );
}
