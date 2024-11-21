import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "../components/providers"
import { EB_Garamond } from "next/font/google"
import { cn } from "@/utils"
import { ClerkProvider } from "@clerk/nextjs"
import "./globals.css"
import LandingNavbar from "@/components/LandingNavbar"
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const eb_garamond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "jStack App",
  description: "Created using jStack",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en" className={cn(inter.variable, eb_garamond.variable)}>
        <body className="min-h-[calc(100vh)] flex flex-col font-sans bg-brand-50 text-brand-950 antialiased">
          <main className="relative flex flex-1 flex-col">
            <Providers>{children}</Providers>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
