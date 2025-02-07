"use client";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client";
import { Product } from "../../../../../types/products";
import React, { useEffect, useState } from "react";
import { urlFor } from "@/sanity/lib/image";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function fetchProduct() {
      if (!id) return;
      const fetchedProduct: Product[] = await client.fetch(
        `*[_type == "product" && _id == "${id}"]`
      );
      if (fetchedProduct.length > 0) {
        setProduct(fetchedProduct[0]);
      }
    }
    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        {/* Product Image */}
        <div className="w-1/2 pr-8">
          {product.image && (
            <img
              src={urlFor(product.image).url()}
              alt={product.name}
              className="w-full rounded-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="w-1/2">
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-lg text-gray-700">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
