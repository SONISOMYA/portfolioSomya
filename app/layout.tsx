import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Somya Soni | Full Stack Developer",
  description: "Portfolio of Somya Soni - Full Stack Developer specializing in Spring Boot, Flutter, and IoT solutions",
  keywords: ["Full Stack Developer", "Spring Boot", "Flutter", "IoT", "React", "Java", "Portfolio"],
  authors: [{ name: "Somya Soni" }],
  creator: "Somya Soni",
  metadataBase: new URL("https://somyasoni.vercel.app"),
  openGraph: {
    title: "Somya Soni | Full Stack Developer",
    description: "Full Stack Developer specializing in Spring Boot, Flutter, and IoT solutions",
    url: "https://somyasoni.vercel.app",
    siteName: "Somya Soni Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Somya Soni Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
