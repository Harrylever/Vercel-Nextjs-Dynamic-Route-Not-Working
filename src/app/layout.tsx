import type { Metadata } from "next"
import { Rethink_Sans } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-rethink-sans",
})

export const metadata: Metadata = {
  title: "Next JS Dynamic Route",
  description: "Next JS Dynamic Route Not Working",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
