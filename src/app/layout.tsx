import type { Metadata } from 'next'
import { CartProvider } from '@/app/contexts/CartContext'; // CartProvider
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/header'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Comforty - Furniture Store',
  description: 'Find the perfect furniture for your home',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider> {/* Move CartProvider to wrap everything */}
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
