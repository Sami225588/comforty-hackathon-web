import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="bg-gray-100  " >
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid   grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-wider text-gray-600 mb-4">WELCOME TO COMFORTY</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1B4B] mb-6">
              Best Furniture Collection For Your Interior.
            </h1>
            <Link
              href="/products"
              className="inline-block bg-teal-500 text-white px-8 py-3 rounded-md hover:bg-teal-600 transition-colors"
            >
              Shop Now
            </Link>
          </div>
          <div className="relative  top-[15px]  left-[-7px] h-[584px] md:h-[500px]">
          <Image
  src="/asset/chair.png"
  alt="Featured Chair"
  width={434}
  height={584}
  priority
objectFit='cover'


/>

          </div>
        </div>
      </div>
    </section>
  )
}

