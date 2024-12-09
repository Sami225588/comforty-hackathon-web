// src/app/products/[id]/page.tsx
import Image from "next/image";
import { Button } from "@/components/ui/button";


export default function ProductPage(){
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={"/asset/2.png"}
            alt={"product.title"}
            className="object-cover rounded-lg"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
          { (
            <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 text-xs rounded">
              New
            </div>
          )}
          { (
            <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 text-xs rounded">
              Sale
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{"product.title"}</h1>
          <div className="flex items-center gap-2">
            <p className="text-2xl font-bold">${"$20"}</p>
            {(
              <p className="text-xl text-gray-500 line-through">${"$30"}</p>
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
