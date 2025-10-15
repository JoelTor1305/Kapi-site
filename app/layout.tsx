import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
})

const playfairDisplay = Playfair_Display({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'KAPI - From Penn State to Purpose',
  description: 'Penn State gymnast, author, and mentor helping you unlock your potential and transform your life. Book launching May 2025.',
  keywords: 'KAPI, Penn State, gymnastics, author, mentor, personal training, book launch, inspiration',
  openGraph: {
    title: 'KAPI - From Penn State to Purpose',
    description: 'Penn State gymnast, author, and mentor helping you unlock your potential and transform your life.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfairDisplay.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  )
}

