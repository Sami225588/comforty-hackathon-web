import { notFound } from 'next/navigation'
import Header from '../../components/header'
import Image from 'next/image'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  image: string
}

interface Style {
  id: string
  name: string
  description: string
  image: string
  products: Product[]
}

// This would typically come from an API or database
const getStyle = async (id: string): Promise<Style | undefined> => {
  const styles: Style[] = [
    {
      id: 'modern',
      name: 'Modern',
      description: 'Clean lines, minimalistic approach, and a focus on function and form.',
      image: '/style-modern.jpg',
      products: [
        { id: 'modern-1', name: 'Modern Armchair', price: 299, image: '/modern-armchair.jpg' },
        { id: 'modern-2', name: 'Sleek Coffee Table', price: 199, image: '/modern-coffee-table.jpg' },
        { id: 'modern-3', name: 'Contemporary Bookshelf', price: 349, image: '/modern-bookshelf.jpg' },
        { id: 'modern-4', name: 'Minimalist Desk', price: 279, image: '/modern-desk.jpg' },
      ]
    },
    // Add more styles here...
  ]
  
  return styles.find(s => s.id === id)
}

export default async function StylePage({
  params,
}: {
  params: { id: string }
}) {
  const style = await getStyle(params.id)
  
  if (!style) {
    notFound()
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="mb-12">
          <div className="relative h-[300px] mb-8">
            <Image
              src={style.image}
              alt={style.name}
              fill
              className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-4xl font-bold mb-2">{style.name} Style</h1>
            </div>
          </div>
          <p className="text-xl text-gray-600">{style.description}</p>
        </div>
        <h2 className="text-3xl font-bold mb-8">Products in {style.name} Style</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {style.products.map((product) => (
            <Link href={`/product/${product.id}`} key={product.id} className="group">
              <div className="aspect-square relative mb-4">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <p className="text-xl font-bold">${product.price}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}

