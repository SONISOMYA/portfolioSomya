import type React from "react"
import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "Somya Soni – Full Stack Developer Portfolio",
  description:
    "Minimal and modern portfolio of Somya Soni, Full Stack Developer skilled in Java, Spring Boot, Flutter, and IoT.",
  keywords: ["Full Stack Developer", "Java", "Spring Boot", "Flutter", "IoT", "Portfolio", "Web Developer"],
  authors: [{ name: "Somya Soni" }],
  creator: "Somya Soni",
  openGraph: {
    title: "Somya Soni – Full Stack Developer",
    description: "Explore the minimal portfolio of Somya Soni, a Full Stack Developer.",
    url: "https://somyaspace.vercel.app",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Somya Soni Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Somya Soni – Full Stack Developer",
    description: "Minimal and modern portfolio of Somya Soni.",
    creator: "@the_Somya_",
  },
    generator: 'v0.app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#F9FAFB] text-[#1E1E1E] dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
