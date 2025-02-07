"use client"
import Header from "@/app/components/header"
import Image from "next/image"
import Footer from "../footer";
import Link from "next/link";
import { useState } from "react";
export default function ProductListing(){
  const [isOpen, setIsOpen] = useState(false);
        const productsRow1And3 = [
            {
              image: "/Parent.png",
              name: "The Dandy Chair",
              price: "£250",
            },
            {
              image: "/Parent (1).png",
              name: "Rustic Vase Set",
              price: "£155",
            },
            {
              image: "/Parent (2).png",
              name: "The Silky Vase",
              price: "£125",
            },
            {
              image: "/Parent (3).png",
              name: "The Lucy Lamp",
              price: "£399",
            },
          ];
          
          const productsRow2 = [
            {
              image: "/Parent (4).png", // Replace with actual image paths
              name: "The Dandy Chair",
              price: "£250",
            },
            {
              image: "/Parent (5).png",
              name: "Rustic Vase Set",
              price: "£155",
            },
            {
              image: "/Photo.png",
              name: "The Silky Vase",
              price: "£125",
            },
            {
              image: "/Parent (6).png",
              name: "The Lucy Lamp",
              price: "£399",
            },
          ];
    return(
        <div>
        <Header/>
        <div
  style={{
    width: "100%", // Full page width
    height: "209px", // Fixed height
    overflow: "hidden", // Ensures no overflow
  }}
>
  <img
    src="/Page Headers (1).png" // Replace with your image URL
    alt="Descriptive Alt Text"
    style={{
      width: "100%", // Ensures the image stretches to full width
      height: "209px", // Fixed height
      objectFit: "cover", // Crops the image proportionally to fit the container
    }}
  />
</div>

<div className="flex justify-between items-center w-full h-16 bg-gray-100 px-4">
  {/* Left Section */}
  <div className="flex gap-4">
  <div className="relative inline-block text-left">
      <span
        className="product-button text-sm font-medium cursor-pointer hover:text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        Category ▼
      </span>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 shadow-lg rounded-lg">
          <ul className="py-2">
            {[
              <Link href="/components/plant-pots">Plant-pots</Link>,
              <Link href="/components/ceramics">Ceramics</Link>,
              <Link href="/components/cutlery">Cutlery</Link>,
              <Link href="/components/table">Table</Link>,
              <Link href="/components/crockery">Crockery</Link>,
              <Link href="/components/table-ware">Tableware</Link>,
              <Link href="/components/chairs">Chairs</Link>,
            ].map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
   <span className="product-button text-sm font-medium cursor-pointer hover:text-gray-600">
      Product type ▼
    </span>
    <span className="product-button text-sm font-medium cursor-pointer hover:text-gray-600">
      Price ▼
    </span>
    <span className="product-button text-sm font-medium cursor-pointer hover:text-gray-600">
      Brand ▼
    </span>
  </div>

  {/* Right Section */}
  <div className="flex gap-4">
    <span className="product-button text-sm font-medium cursor-pointer hover:text-gray-600">
      Sorting by:
    </span>
    <span className="product-button text-sm font-medium cursor-pointer hover:text-gray-600">
      Date added ▼
    </span>
  </div>
</div>



<section className="py-16 px-6">
  {/* Row 1 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mb-12">
    {productsRow1And3.map((product, index) => (
      <div key={`row1-${index}`}>
        {/* Image Container */}
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden"
          style={{ width: "305px", height: "375px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name and Price */}
        <div className="mt-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center mb-12">
    {productsRow2.map((product, index) => (
      <div key={`row2-${index}`}>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden"
          style={{ width: "305px", height: "375px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name and Price */}
        <div className="mt-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Row 3 (Same as Row 1) */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
    {productsRow1And3.map((product, index) => (
      <div key={`row3-${index}`}>
        <div
          className="bg-white shadow-md rounded-lg overflow-hidden"
          style={{ width: "305px", height: "375px" }}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Name and Price */}
        <div className="mt-4 flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-sm text-gray-600">{product.price}</p>
        </div>
      </div>
    ))}
  </div>
  <div className="flex justify-center mt-8">
  <Link href="/components/view-collection"><button
    className="bg-[#F8F8F8] text-black text-sm font-medium px-6 py-3 rounded-md shadow-md hover:bg-gray-200"
    style={{ width: "170px", height: "56px" }}
  >
    View Collection
  </button></Link>
</div>
  
</section>

<br/><br/>
<br/><br/>

<div><Footer/></div>

        </div>
    )
}