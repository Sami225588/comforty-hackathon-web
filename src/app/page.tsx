import Image from 'next/image'

import Hero from './components/hero'
import FeaturedProducts from './components/featured_product'
import Categories from './components/categories'
import ExploreStyles from './components/explore_styles'
import OurProducts from './components/our_products'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="flex justify-center items-center">
  <div className="w-[1200px]">
    <Image 
      src="/asset/row.png" 
      alt="products" 
      width={1200} 
      height={139} 
      priority 
      objectFit="fill" 
    />
  </div>
</div>

      <FeaturedProducts />
      <Categories />
      <ExploreStyles />
      <OurProducts />
      
    </>
  )
}

