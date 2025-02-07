import React from "react";
import Link from "next/link";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      {/* Header Container */}
      <div className="flex justify-between items-center px-4 py-3 md:px-6">
        {/* Search Button */}
        <div>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <IoMdSearch size={20} />
          </button>
        </div>

        {/* Avion Logo */}
        <div className="text-xl font-semibold text-gray-800">
          <Link href="/">Avion</Link>
        </div>

        {/* Icons (Cart & User) */}
        <div className="flex items-center space-x-4">
          <Link href="/components/shopping-basket" className="text-gray-600 hover:text-gray-800">
            <IoCartOutline size={20} />
          </Link>
          <Link href="/components/about" className="text-gray-600 hover:text-gray-800">
            <FaRegCircleUser size={20} />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-300" />

      {/* Navigation */}
      <nav className="bg-gray-50">
        <ul className="flex flex-wrap justify-center space-x-4 py-3 text-sm font-medium text-gray-700 md:space-x-6">
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
    </header>
  );
}