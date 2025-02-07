
"use client"

import Image from "next/image";
import Link from "next/link";

import { FaTruckFast } from "react-icons/fa6";
import { LuCircleUser } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import React from "react";
import { useState } from 'react';
import { CheckCircle, Truck, Tag, RefreshCcw } from "lucide-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
export default function Plantpot(){
    const [amount, setAmount] = useState(1);

    const incrementAmount = () => setAmount((prev) => prev + 1);
    const decrementAmount = () =>
      setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  
    const handleAddToCart = () => {
      alert(`Added ${amount} item(s) to the cart!`);
    };
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
    const products = [
        {
          image: "/Parent.png", // Replace with actual image paths
          name: "The Dandy Chair",
          price: "£230",
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
    

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return(
       
       
    
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
            <Link href="/components/plant-pots" className="hover:text-gray-900">
              Plant Pots
            </Link>
          </li>
          <li>
            <Link href="/components/ceramics" className="hover:text-gray-900">
              Ceramics
            </Link>
          </li>
          <li>
            <Link href="/components/tables" className="hover:text-gray-900">
              Tables
            </Link>
          </li>
          <li>
            <Link href="/components/chairs" className="hover:text-gray-900">
              Chairs
            </Link>
          </li>
          <li>
            <Link href="/components/crockery" className="hover:text-gray-900">
              Crockery
            </Link>
          </li>
          <li>
            <Link href="/components/tableware" className="hover:text-gray-900">
              Tableware
            </Link>
          </li>
          <li>
            <Link href="/components/cutlery" className="hover:text-gray-900">
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
            
        
              <div className="flex flex-wrap relative">
  {/* Left Side with Image */}
  <div className="w-full lg:w-[721px] h-auto lg:h-[759px]">
    <img
      src="/Product Image (1).png"
      alt="The Dandy Chair"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Right Side with Description */}
  <div
    className="w-full lg:w-[602px] h-auto lg:h-[657px] lg:absolute lg:left-[783px] lg:top-[51px] p-4"
  >
    <h2 className="text-2xl font-bold mb-2">Plant pot</h2>
    <p className="text-xl text-gray-900 mb-4">£150</p>
    <p className="text-base text-gray-700 mb-6">
      A timeless design, with premium materials features as one of our most<br /> popular and iconic pieces.
      The Dandy Chair is perfect for any stylish<br /> living space with beech legs and lambskin leather upholstery.
    </p>

    {/* Features List */}
    <div className="space-y-2">
      <p>● Premium material</p>
      <p>● Handmade upholstery</p>
      <p>● Quality timeless classic</p>
    </div>

    <br /><br />
    <h3 className="font-semibold text-lg mb-4">Dimensions</h3>

    <div
      className="mt-6 w-full max-w-[300px] flex flex-wrap items-center justify-between text-gray-700 text-sm"
    >
      <div className="w-1/3 text-center">
        <p className="font-medium">Height</p>
        <p>110cm</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="font-medium">Width</p>
        <p>75cm</p>
      </div>
      <div className="w-1/3 text-center">
        <p className="font-medium">Depth</p>
        <p>50cm</p>
      </div>
    </div>

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
        className="w-full sm:w-auto px-20 max-w-[241px] h-[51px] bg-indigo-900 text-white font-medium rounded hover:bg-indigo-700"
      >
        Add to cart
      </button>
    </div>
  </div>
</div>
<div  style={{
    width: "100%",
    fontStyle:"bold",
    marginLeft:"20px",
    color: "#888888", 
    fontSize:"30px",
    fontFamily:"Poppin",
    marginTop:"30px",
    marginBottom:"-50px",
    
  }}


> You might also like </div>
<section className="py-16 px-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
    {products.map((product, index) => (
      <div key={index}>
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

        {/* Name and Price below the Image Container, aligned to the left */}
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
<section className="py-16 px-6 bg-white">
      <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-gray-900">
        What makes our brand different
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
    <div
  style={{
    width: "100%", // Full page width
    height: "481px",
    backgroundColor: "#F8F8F8", // Grey background for the outer container
    display: "flex", // To center the inner container
    justifyContent: "center",
    alignItems: "center",
  }}
>
  {/* Inner Container */}
  <div
    style={{
      width: "1273px",
      height: "364px",
      backgroundColor: "white", // Optional background color for the inner container
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start", // Align text to the left
      padding: "0 20px", // Optional padding for inner content
    }}
  >
    {/* Text */}
    
    <div className="absolute top-24 left-1/2 transform -translate-x-1/2 text-center text-black px-6">
      <h2 className="text-3xl font-bold mb-4">Join the club and get the benefits</h2>
      <p className="text-lg">
        Sign up for our newsletter and receive exclusive offers on
      </p>
      <p className="text-lg ml-12 sm:ml-0">
        new ranges, sales, pop-up stores, and more
      </p>
</div>
<div className="a"
  style={{
    position: "absolute",
    left: "50%", // Center horizontally
    top: "254px",
    transform: "translateX(-50%)", // Center alignment adjustment
    display: "flex",
    flexDirection: "row", // Horizontal alignment by default
    alignItems: "center",
    gap: "8px", // Add some spacing between the input and button
  }}
>
  {/* Email Input */}
  <input
    type="email"
    placeholder="Enter your email"
    style={{
      width: "472px",
      height: "56px",
      backgroundColor: "white",
      border: "1px solid #ccc",
      borderRadius: "4px 0 0 4px", // Rounded corners on the left
      padding: "0 16px",
      fontSize: "16px",
      outline: "none",
    }}
  />

  {/* Sign Up Button */}
  <button
    style={{
      width: "120px", // Button width
      height: "56px", // Button height matching input
      backgroundColor: "#483D8B", // Indigo-900
      color: "white",
      border: "none",
      borderRadius: "0 4px 4px 0", // Rounded corners on the right
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    }}
  
  >
    Sign Up
  </button>

  {/* Responsive Styles */}
  <style>
    {`
      @media (max-width: 768px) {
        a {
          flex-direction: column; /* Stack items vertically */
          left: 50%; /* Keep horizontally centered */
          top: 200px; /* Adjust top position for smaller screens */
          transform: translateX(-50%); /* Center alignment adjustment */
        }
        input {
          width: 100%; /* Full width input */
          border-radius: 4px; /* Full border radius for mobile */
        }
        button {
          width: 100%; /* Full width button */
          border-radius: 4px; /* Full border radius for mobile */
          margin-top: 8px; /* Add spacing between input and button */
        }
      }
    `}
  </style>
</div>
  </div>

  
</div>

<footer className="bg-indigo-950 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="font-bold text-lg">Avion</h3>
          <address className="not-italic mt-4 text-sm">
            21 New York Street <br />
            New York City <br />
            United States of America <br />
            432 34
          </address>
          <p className="text-sm mt-4">&copy; 2022 Avion LTD</p>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">SOCIAL MEDIA</h6>
          <ul className="flex space-x-4">
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" data-original="#000000" />
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                  <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" data-original="#007ab9" />
                  <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" data-original="#f1f2f2" />
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                  <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fae100" />
                    <stop offset=".15" stop-color="#fcb720" />
                    <stop offset=".3" stop-color="#ff7950" />
                    <stop offset=".5" stop-color="#ff1c74" />
                    <stop offset="1" stop-color="#6c1cd1" />
                  </linearGradient>
                  <g data-name="Layer 2">
                    <g data-name="03.Instagram">
                      <rect width="152" height="152" fill="url(#a)" data-original="url(#a)" rx="76" />
                      <g fill="#fff">
                        <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" data-original="#ffffff10" />
                        <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" data-original="#ffffff" />
                        <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" data-original="#ffffff" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 1227 1227">
                  <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
                  <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
                </svg>
              </a>
            </li>
          </ul>
          <div className="!mt-8">
            <h6 className="text-[13px] text-gray-400 font-medium">Get exclusive assets sent straight to your inbox</h6>
            <div className="mt-4">
              <a href="javascript:void(0)" className="bg-indigo-900 hover:bg-blue-700 text-sm text-white font-medium py-3 px-6 tracking-wide rounded">Sign up</a>
            </div>
          </div>
        </div>
      




   

        {/* Menu, Categories, and Our Company */}
        <div className="md:col-span-3 text-right">
          <div className="flex justify-end space-x-8">
            {/* Menu */}
            <div>
              <h3 className="font-bold text-lg">Menu</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    New arrivals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Best sellers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Recently viewed
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Popular this week
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/components/product-listing">All Products</Link> 
                  </a>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-bold text-lg">Categories</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Crockery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Furniture
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Homeware
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Plant pots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/components/chairs"> Chairs</Link>
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="font-bold text-lg">Our Company</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-400">
                  <Link href="/components/about"> About us</Link>
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Vacancies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-400">
                    Returns policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    
    
          <hr className="my-6 border-gray-600" />

<div className="max-w-screen-xl mx-auto text-center">
  <p className="text-gray-400 text-[13px]">
  Copyright 2022 Avion LTD
  </p></div>
        </div>
      
      
    </footer>
</div>

    );
}