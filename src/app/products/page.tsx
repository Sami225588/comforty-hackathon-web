"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Product {
  id: string
  title: string
  price: number 
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

const products: Product[] = [
  {
    id: "1",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/6.png",
    isNew: true
  },
  {
    id: "2",
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 40,
    image: "/asset/1.png",
    isSale: true
  },
  {
    id: "3",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/2.png",
  },
  {
    id: "4",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/3.png",
  },
  {
    id: "5",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/4.png",
    isNew: true
  },
  {
    id: "6",
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 40,
    image: "/asset/5.png",
    isSale: true
  },
  {
    id: "7",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/6.png",
  },
  {
    id: "8",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/7.png",
  },
  {
    id: "9",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/1.png",
    isNew: true
  },
  {
    id: "10",
    title: "Library Stool Chair",
    price: 20,
    originalPrice: 40,
    image: "/asset/2.png",
    isSale: true
  },
  {
    id: "11",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/2.png",
  },
  {
    id: "12",
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/4.png",
  }
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">All Products</h1>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {products.map((product) => (
          <div key={product.id} className="group relative">
            <Link target="_blank" href={`/product`}>
              <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="object-cover"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
                {product.isNew && (
                  <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    New
                  </div>
                )}
                {product.isSale && (
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                    Sale
                  </div>
                )}
                 <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image src="/asset/addcart.png" alt="Add to cart" width={50} height={50} />
                </Button>
              </div>
            </Link>
            <div className="mt-4 flex justify-start">
              <div>
                <h3 className="text-sm font-medium text-gray-900">{product.title}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium text-gray-900">${product.price}</p>
                  {product.originalPrice && (
                    <p className="text-sm text-gray-500 line-through">${product.originalPrice}</p>
                  )}
                </div>
              </div>
              
            </div>
                <div className="flex  justify-end">
                  <Image src="/asset/addcart.png" alt="Add to cart" width={50} height={50} />
                </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="text-center mb-16">
        <h2 className="text-2xl font-bold mb-6">Or Subscribe To The Newsletter</h2>
        <div className="flex max-w-md mx-auto gap-4">
          <Input
            type="email"
            placeholder="Email Address..."
            className="flex-1"
          />
          <Button>SUBMIT</Button>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Follow Products And Discounts On Instagram</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.slice(0, 6).map((product) => (
            <div key={`instagram-${product.id}`} className="relative aspect-square">
              <Image
                src={product.image}
                alt={product.title}
                className="object-cover rounded-lg"
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

