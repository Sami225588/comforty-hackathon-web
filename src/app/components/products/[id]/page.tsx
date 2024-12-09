// src/app/products/[id]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

// Simulated API function to fetch product details (replace with actual API call)
async function getProductById(id: string): Promise<Product | undefined> {
  // Simulate API data
  const product: Product | undefined = {
    id,
    title: "Library Stool Chair",
    price: 20,
    image: "/asset/2.png",
    isNew: id === "1",
    isSale: id === "2",
    originalPrice: id === "2" ? 40 : undefined,
  };
  
  return product;
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const product = await getProductById(id);

  if (!product) {
    notFound(); // Renders a 404 page
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.image}
            alt={product.title}
            className="object-cover rounded-lg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
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
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">${product.price}</p>
            {product.originalPrice && (
              <p className="text-xl text-gray-500 line-through">${product.originalPrice}</p>
            )}
          </div>
          <Button size="lg" className="w-full md:w-auto">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
