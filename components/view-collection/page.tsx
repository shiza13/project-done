"use client";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import Image from "next/image";
import { Product } from "../../../../types/products";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";
import { useRouter } from "next/navigation";
import Link from "next/link";


const ViewCollection = () => {
  const [product, setProduct] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchedProduct() {
      const fetchedProduct: Product[] = await client.fetch(allProducts);
      setProduct(fetchedProduct);
    }
    fetchedProduct();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        View our latest collection
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((product) => (
          <div
            key={product._id}
            className="bg-grey shadow-lg rounded-lg p-4 flex flex-col items-center text-center cursor-pointer"
            onClick={() => router.push(`/components/product/${product._id}`)}
          >
            {/* Product Name */}
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>

            {/* Product Image */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                width={200}
                height={200}
                className="rounded-md mb-4"
              />
            )}

            {/* Product Price */}
            <p className="text-lg font-bold text-gray-700">${product.price}</p>
          </div>
        ))}
      </div>
    <br/>
   <Link href="/components/checkout"> <button  className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
    style={{ width: "170px", height: "56px" }}>Go to checkout</button></Link>
    </div>
  );
};

export default ViewCollection;
