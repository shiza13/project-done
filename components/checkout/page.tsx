// pages/checkout.js
"use client"
import Image from 'next/image'
import Header from '../header'
import { FaTruckFast } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import { useState } from 'react';
import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
export default function Checkout() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);
    const features = [
        {
          icon: <Truck className="text-gray-900 w-8 h-8" />,
          title: "Next day as standard",
          description: "Order before 3pm and get your order the next day as standard",
        },
        {
          icon: <CheckCircle className="text-gray-900 w-8 h-8" />,
          title: "Made by true artisans",
          description: "Handmade crafted goods made with real passion and craftsmanship",
        },
        {
          icon: <Tag className="text-gray-900 w-8 h-8" />,
          title: "Unbeatable prices",
          description: "For our materials and quality, you won't find better prices anywhere",
        },
        {
          icon: <RefreshCcw className="text-gray-900 w-8 h-8" />,
          title: "Recycled packaging",
          description: "We use 100% recycled materials to ensure our footprint is more manageable",
        },
      ];
  return (

    
    <div>
    {/* Promo Bar */}
    <div className="bg-indigo-900 text-white flex items-center justify-between px-4 py-2 relative">
      {/* Centered Logo and Text */}
      <div className="flex items-center mx-auto">
        <FaTruckFast className="w-6 h-6 mr-2" />
        <p className="text-sm font-medium">Free Delivery on Orders Over $50</p>
      </div>

      {/* Cross Button */}
      <button
        className="absolute right-4 text-white text-lg font-bold"
        onClick={() => (window.location.href = "/")} // Redirect to the main page
      >
        &times;
      </button>
    </div>

    {/* Navbar */}
    <nav className="bg-gray-50 h-20">
      <div className="flex items-center justify-between h-full px-6">
        {/* Left Section with Avion */}
        <div className="text-xl font-semibold text-gray-900">
          <Link href="/" className="hover:text-gray-900">
            Avion
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          className="block md:hidden text-xl text-gray-900"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          &#9776;
        </button>

        {/* Middle Section for Navigation Links */}
        <nav className="bg-gray-50">
<ul className="flex flex-wrap justify-center space-x-4 py-3 text-sm font-medium text-gray-700 md:space-x-6">
<li>
  <Link href="/components/product-listing" className="hover:text-gray-900">
    All Products
  </Link>
</li>
<li>
  <Link href="/plant-pots" className="hover:text-gray-900">
    Plant Pots
  </Link>
</li>
<li>
  <Link href="/ceramics" className="hover:text-gray-900">
    Ceramics
  </Link>
</li>
<li>
  <Link href="/tables" className="hover:text-gray-900">
    Tables
  </Link>
</li>
<li>
  <Link href="/components/chairs" className="hover:text-gray-900">
    Chairs
  </Link>
</li>
<li>
  <Link href="/crockery" className="hover:text-gray-900">
    Crockery
  </Link>
</li>
<li>
  <Link href="/tableware" className="hover:text-gray-900">
    Tableware
  </Link>
</li>
<li>
  <Link href="/cutlery" className="hover:text-gray-900">
    Cutlery
  </Link>
</li>
</ul>
</nav>

        {/* Right Section for Search, Cart, and User */}
        <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
          <IoIosSearch className="w-5 h-5 cursor-pointer" />
          <Link href="/components/shopping-basket">  <IoCartOutline className="w-5 h-5 cursor-pointer" /></Link>
          <Link href="/components/about">
            <LuCircleUser className="w-5 h-5 cursor-pointer" />
          </Link>
        </div>
      </div>
    </nav>
  

    <div className="max-w-7xl mx-auto p-6">
      {/* Checkout Page Title */}
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Order Summary */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {/* Product List */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <p className="text-lg">Product Name</p>
              <p className="text-lg">£250</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg">Product Name</p>
              <p className="text-lg">£150</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-semibold">£400</p>
            </div>
          </div>

          {/* Promo Code */}
          <div className="mt-6">
            <label htmlFor="promo-code" className="block text-sm font-medium text-gray-700">Promo Code</label>
            <input type="text" id="promo-code" className="mt-2 p-3 w-full border border-gray-300 rounded-md" placeholder="Enter promo code" />
            <button className="mt-3 w-full bg-blue-600 text-white py-3 rounded-md">Apply</button>
          </div>
        </div>

        {/* Shipping Information */}
        <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>

          <form>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" className="mt-2 p-3 w-full border border-gray-300 rounded-md" placeholder="John Doe" required />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <input type="text" id="address" className="mt-2 p-3 w-full border border-gray-300 rounded-md" placeholder="123 Main St" required />
            </div>

            {/* City */}
            <div className="mb-4">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" id="city" className="mt-2 p-3 w-full border border-gray-300 rounded-md" placeholder="New York" required />
            </div>

            {/* Postal Code */}
            <div className="mb-4">
              <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" id="postal-code" className="mt-2 p-3 w-full border border-gray-300 rounded-md" placeholder="10001" required />
            </div>

            {/* Country */}
            <div className="mb-6">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
              <select id="country" className="mt-2 p-3 w-full border border-gray-300 rounded-md" required>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
                <option value="India">India</option>
                <option value="Pakistan">Pakistan</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md">Proceed to Payment</button>
          </form>
        </div>
      </div>
    </div>

</div>
  )
}