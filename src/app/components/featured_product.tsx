import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
  isNew?: boolean
  isSale?: boolean
}

const products: Product[] = [
  {
    id: '1',
    name: 'Library Stool Chair',
    price: 20,
    image: '/asset/1.png',
    isNew: true,
  },
  {
    id: '2',
    name: 'Library Stool Chair',
    price: 20,
    image: '/asset/2.png',
    isSale: true,
  },
  {
    id: '3',
    name: 'Library Stool Chair',
    price: 20,
    image: '/asset/3.png',
  },
  {
    id: '4',
    name: 'Library Stool Chair',
    price: 20,
    image: '/asset/4.png',
  },
]

export default function FeaturedProducts() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link href={`/products`} key={product.id} className="group ">
              <div className="relative">
                <div className="aspect-square relative mb-4">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-sm rounded">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 text-sm rounded">
                    Sale
                  </span>
                )}
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-xl font-bold float-left">${product.price}</p>
              <Image className=' float-right' src="/asset/addcart.png" alt="Add to cart" width={50} height={50} />

            </Link>
          ))}
            
        </div>
        
      </div>
    </section>
  )
}

