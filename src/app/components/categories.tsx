import Image from 'next/image'
import Link from 'next/link'

const categories = [
  {
    id: 'wing-chair',
    name: 'Wing Chair',
    image: '/asset/5.png',
    products: 1344,
  },
  {
    id: 'wooden-chair',
    name: 'Wooden Chair',
    image: '/asset/6.png',
    products: 941,
  },
  {
    id: 'desk-chair',
    name: 'Desk Chair',
    image: '/asset/7.png',
    products: 634,
  },
]

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link
              href={`/products`}
              key={category.id}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/4]  relative">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:bg-black/70 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-xl   font-bold mb-2">{category.name}</h3>
                  <p className="text-sm">{category.products} Products</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
