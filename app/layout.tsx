import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/macro/NavBar'
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Scholarship Scam detector AI',
  description: 'AI trained to detect scholarship scams, using a fine-tuned GPT-3 model.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <header className=" w-screen py-3 sticky top-0 z-40 flex flex-row justify-center  border-b-2 border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <NavBar />
        </header>
            {children}
          </ThemeProvider>
        </body>
    </html>
  )
}
