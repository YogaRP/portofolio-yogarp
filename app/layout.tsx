import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../lib/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Yoga Rizky Putra — Full-Stack Developer",
    template: "%s | Yoga Rizky",
  },
  description:
    "Full-stack developer passionate about building scalable digital solutions with Next.js, TypeScript, and modern web technologies.",
  keywords: [
    "Full-stack Developer",
    "Next.js",
    "TypeScript",
    "React",
    "Node.js",
    "MongoDB",
    "Web Development",
    "Software Engineer",
  ],
  authors: [{ name: "Yoga Rizky Putra" }],
  creator: "Yoga Rizky Putra",
  metadataBase: new URL("https://yoga-rizky.dev"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yoga-rizky.dev",
    title: "Yoga Rizky Putra — Full-Stack Developer",
    description:
      "Full-stack developer passionate about building scalable digital solutions with Next.js, TypeScript, and modern web technologies.",
    siteName: "Yoga Rizky Putra Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yoga Rizky Putra — Full-Stack Developer",
    description:
      "Full-stack developer passionate about building scalable digital solutions with Next.js, TypeScript, and modern web technologies.",
    creator: "@yogarizky",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
