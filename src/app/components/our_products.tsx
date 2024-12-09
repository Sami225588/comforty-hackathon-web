import Image from 'next/image'
import { Button } from "@/components/ui/button"

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

const products: Product[] = [
  {
    id: '1',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/1.png",
    isNew: true
  },
  {
    id: '2',
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 50,
    image: "/asset/2.png",
    isSale: true
  },
  {
    id: '3',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/3.png",
  },
  {
    id: '4',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/4.png",
  },
  {
    id: '5',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/5.png",
    isNew: true
  },
  {
    id: '6',
    name: 'Library Stool Chair',
    price: 20,
    originalPrice: 50,
    image: "/asset/7.png",
    isSale: true
  },
  {
    id: '7',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/6.png",
  },
  {
    id: '8',
    name: 'Library Stool Chair',
    price: 20,
    image: "/asset/1.png",
  }
]

export default function OurProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg"
                />
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
                    Sales
                  </span>
                )}
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image src="/asset/addcart.png" alt="Add to cart" width={50} height={50} />
                </Button>
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <div className="flex items-center justify-between gap-2">
                {/* Product Price Section */}
                <div className="flex items-center gap-2">
                  <span className="font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through">${product.originalPrice}</span>
                  )}
                </div>

                {/* Add to Cart Icon */}
                  <div>
                    <Image src="/asset/addcart.png" alt="Add to cart" width={50} height={50} />
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

