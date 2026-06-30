import type { Metadata } from "next";
import { Space_Grotesk, Space_Mono } from "next/font/google";
import { Navbar } from "@/components/shared/navbar";
import { Footer } from "@/components/shared/footer";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Ground Zero Community — Code Beyond Limits, Build Beyond Boundaries",
  description:
    "A welcoming technology community for developers, students, designers, creators, and tech enthusiasts to build practical projects, share knowledge, and learn together.",
  keywords: [
    "developer community",
    "programming",
    "software engineering",
    "UI/UX design",
    "AI machine learning",
    "cybersecurity",
    "open source",
    "Ground Zero",
  ],
  openGraph: {
    title: "Ground Zero Community",
    description:
      "Code Beyond Limits, Build Beyond Boundaries. Join a community of builders, learners, and creators.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="w-dvw h-dvh flex flex-col bg-background text-foreground">
        <div className="noise-overlay" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
