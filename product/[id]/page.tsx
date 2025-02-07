"use client";
import { client } from "@/sanity/lib/client";
import { productById } from "@/sanity/lib/queries"; // Define query for fetching a product by ID
import Image from "next/image";
import { Product } from "../../../../../types/products";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Link from "next/link";

import { FaTruckFast } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import React from "react";

import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";


const ProductPage = () => {
   const [amount, setAmount] = useState(1);
  
      const incrementAmount = () => setAmount((prev) => prev + 1);
      const decrementAmount = () =>
        setAmount((prev) => (prev > 1 ? prev - 1 : 1));
    
      const handleAddToCart = () => {
        alert(`Added ${amount} item(s) to the cart!`);
      };
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const fetchedProduct: Product = await client.fetch(productById, { id });
      setProduct(fetchedProduct);
    }
    if (id) fetchProduct();
  }, [id]);

  if (!product) return <p className="text-center text-gray-600">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{product.name}</h1>

      <div className="flex flex-col md:flex-row items-center gap-6">
        {product.image && (
          <Image
            src={urlFor(product.image).url()}
            alt={product.name}
            width={400}
            height={400}
            className="w-full h-full object-cover ml--20"
          />
        )}

        <div>
        <h2><p className="text-2xl font-bold mb-2">
            {product.name}
          </p></h2>
       
          <p className="text-lg text-gray-700 font-bold">
            Price: ${product.price}
          </p>
          <p className="text-base mr-12 text-gray-700 mb-6">
  {product.description}
</p>

    {/* Amount and Add to Cart Section */}
    <div className="mt-6 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
      {/* Amount Section */}
      <div className="flex items-center space-x-2">
        <span className="font-medium">Amount:</span>
        <div className="flex items-center border border-gray-300 rounded">
          <button
            onClick={decrementAmount}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
          >
            -
          </button>
          <input
            type="text"
            value={amount}
            readOnly
            className="w-12 h-8 text-center border-l border-r border-gray-300"
          />
          <button
            onClick={incrementAmount}
            className="w-8 h-8 flex items-center justify-center bg-gray-200 hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="w-full sm:w-auto px-20 max-w-[241px] h-[51px] bg-indigo-900 text-white font-medium rounded hover:bg-indigo-700 "
      >
        Addtocart
      </button>
    </div>
  </div>

        </div>
        <Link href="/components/checkout"> <button  className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
    style={{ width: "170px", height: "56px" }}>Go to checkout</button></Link>
      </div>




  );
};

export default ProductPage;
