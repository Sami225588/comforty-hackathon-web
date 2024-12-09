import Image from 'next/image'
import Link from 'next/link'

const styles = [
  {
    id: 'modern',
    name: 'Modern Orange Chair',
    image: "/asset/3.png"
  },
  {
    id: 'classic',
    name: 'White Tufted Chair',
    image: "/asset/5.png"
  },
  {
    id: 'minimal',
    name: 'White Wooden Chair',
    image: "/asset/5.png"
  },
  {
    id: 'contemporary',
    name: 'Gray Upholstered Chair',
    image: "/asset/5.png"
  },
  {
    id: 'traditional',
    name: 'Classic White Chair',
    image: "/asset/5.png"
  },
]

export default function ExploreStyles() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 flex-col">
          {/* Heading for Mobile/Tablet */}
          <h2 className="text-xl font-bold tracking-widest uppercase mb-6 lg:hidden">
            Explore New and Popular Styles
          </h2>

          <div className="flex-1">
            {/* Responsive Grid Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:grid-rows-2 gap-4">
              {/* First Item: Large Image with Vertical Text */}
              <div className="relative sm:col-span-1 lg:col-span-2 lg:row-span-2">
                <Link target='_blank' href={`/products`} className="block">
                  <div className="relative aspect-[4/4]">
                    <Image
                      src={styles[0].image}
                      alt={styles[0].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </Link>
                {/* Vertical Text */}
                <div className="absolute top-0 left-0 h-full hidden lg:flex items-center">
                  <h2 className="vertical-text -rotate-180 text-xl text-white bg-black font-bold tracking-widest uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                    Explore New and Popular Styles
                  </h2>
                </div>
              </div>

              {/* Second Item */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-start-3">
                <Link href={`/products`} className="block">
                  <div className="relative aspect-square">
                    <Image
                      src={styles[1].image}
                      alt={styles[1].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </Link>
              </div>

              {/* Third Item */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-start-3 lg:row-start-2">
                <Link href={`/products`} className="block">
                  <div className="relative aspect-square">
                    <Image
                      src={styles[2].image}
                      alt={styles[2].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </Link>
              </div>

              {/* Fourth Item */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-start-4 lg:row-start-1">
                <Link href={`/products`} className="block">
                  <div className="relative aspect-square">
                    <Image
                      src={styles[3].image}
                      alt={styles[3].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </Link>
              </div>

              {/* Fifth Item */}
              <div className="sm:col-span-1 md:col-span-1 lg:col-start-4 lg:row-start-2">
                <Link href={`/products`} className="block">
                  <div className="relative aspect-square">
                    <Image
                      src={styles[4].image}
                      alt={styles[4].name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 20vw"
                    />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
