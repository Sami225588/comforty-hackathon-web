'use client'

import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useCart } from '@/app/contexts/CartContext'; // Assuming you're using context for cart management

interface CartItem {
  id: string
  title: string
  price: number
  image: string
  color: string
  size: string
  quantity: number
}

export default function ProductPage() {
  const { addItemToCart } = useCart(); // Cart context hook to manage cart state
  const router = useRouter();
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const handleAddToCart = async () => {
    setIsAddingToCart(true);

    // Create a new cart item object
    const newItem: CartItem = {
      id: Date.now().toString(),
      title: "Library Stool Chair",
      price: 20,
      image: "/asset/1.png",
      color: "Pink",
      size: "L",
      quantity: 1,
    };

    // Add item to the cart using the context's addItem function
    addItemToCart(newItem);

    // Simulate a short delay, and then redirect to the cart page
    await new Promise(resolve => setTimeout(resolve, 500));
    router.push('/cart'); // Navigate to the cart page
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="relative aspect-square bg-pink-50 rounded-lg overflow-hidden">
          <Image
            src="/asset/2.png"
            alt="Library Stool Chair"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="flex leading-[50px] flex-col gap-4">
          <h1 className="text-4xl font-bold text-navy-900">Library Stool Chair</h1>
          <p className="text-xl font-semibold">$20.00 USD</p>
          <hr />
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p>
          <Button 
            size="lg" 
            className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white"
            onClick={handleAddToCart}
            disabled={isAddingToCart}
          >
            {isAddingToCart ? 'Adding to Cart...' : 'Add To Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
}
