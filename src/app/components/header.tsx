'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/app/contexts/CartContext'; // Import the useCart hook

export default function Header() {
  const { cartItems } = useCart(); // Get the cart items from the context

  // Calculate total items in the cart (sum of all item quantities)
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-background">
      <div className="container mx-auto px-4">
        {/* Top bar: Free Shipping */}
        <div className="py-2 border-b text-sm bg-[#272443] flex justify-between items-center">
          <p className="text-white">Free Shipping On All Orders Over $50</p>
          <div className="flex gap-4">
            <Link target="_blank" href="/" className="text-muted-foreground hover:text-white">Eng</Link>
            <Link target="_blank" href="/faq" className="text-muted-foreground hover:text-white">FAQ</Link>
            <Link target="_blank" href="/" className="text-muted-foreground hover:text-white">Need Help</Link>
          </div>
        </div>

        {/* Main header: Comforty Logo */}
        <div className="py-4 bg-[#f1f2f4] flex justify-between items-center">
          <div className='flex items-center gap-2'>
            <Link target="_blank" href="/" className="flex items-center gap-2 mb-4">
              <Image src="/asset/logo.png" alt="Comforty" width={168} height={40} />
            </Link>
          </div>

          {/* Cart Section */}
          <div className="relative">
            <Link href="/cart " className='mr-32' >
              <Image src="/asset/cart.png" alt="Cart" width={100} height={100} />
            </Link>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="py-4 flex justify-between shadow-lg items-center">
          <nav className="flex justify-start gap-6 w-full">
            <Link target="_blank" href="/" className="text-primary hover:text-primary/80">Home</Link>
            <Link target="_blank" href="/cart" className="text-primary hover:text-primary/80">Shop</Link>
            <Link target='_blank' href="/products" className="text-primary hover:text-primary/80">Products</Link>
            <Link href="/aboutUs" className="text-primary hover:text-primary/80">About</Link>
          </nav>
          <div className="flex justify-between items-center py-4">
            <div className="text-right w-52 hidden md:block">
              <p className="font-medium">
                <Link href="/contact" target='_blank'>Contact</Link> (808) 555-0111
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
