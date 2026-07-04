import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import { ThemeInitializer } from "@/components/ThemeInitializer";

export const metadata: Metadata = {
  metadataBase: new URL('https://pankajkumargnc.github.io/bbmku-polsci-suite'),
  title: "BBMKU M.A. Political Science — Digital Study Suite",
  description: "Complete study companion for BBMKU M.A. Political Science students with syllabus, PYQs, quizzes, flashcards, and more.",
  keywords: ["BBMKU", "Political Science", "M.A.", "UGC NET", "Study", "Quiz", "Syllabus"],
  manifest: "/manifest.json",
  openGraph: {
    images: [{ url: '/og-image.png', width: 1280, height: 640 }],
  },
};

export const viewport = {
  themeColor: "#3b82f6",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 antialiased min-h-screen">
        <ThemeInitializer />
        <Toaster position="top-center" richColors />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
