import React from 'react';
import Image from 'next/image';
import Logo from "../../../public/assets/icons/toplogo.svg";
import Nike from "../../../public/assets/icons/nikelogo.svg";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { BsBag } from "react-icons/bs";

import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  return (
<div>
        <header className="bg-[#F5F5F5] border-b font-[Helvetica Neue] flex justify-between items-center px-5 md:px-10 py-2">
          {/* Logo Section */}
          <Image src={Logo} alt="Logo" className="w-[25px] md:w-[50px]" />
    
          {/* Links Section */}
          <nav>
            <ul className="flex items-center space-x-3 text-black text-[10px] md:text-[16px] font-medium">
              <li>
                <Link href="/FindStore">Find a Store</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/ContactUs">Help</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/JoinUs">Join Us</Link>
              </li>
              <span className="h-[14px] w-px bg-gray-400" />
              <li>
                <Link href="/login">Sign In</Link>
              </li>
            </ul>
          </nav>
      </header>
      {/* Main navbar */}
    
    <header className="bg-white border-b shadow-sm">
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-10 py-2">
        {/* Logo */}
        <Image src={Nike} alt="Logo" className="w-[35px] md:w-[60px]" />

        {/* Navigation Links (hidden on mobile) */}
        <nav className="hidden md:flex space-x-6 items-center font-medium">
          <a href="/all-products" className="text-black hover:underline">
            New & Featured
          </a>
          <a href="/all-products" className="text-black hover:underline">
            Men
          </a>
          <a href="/all-products" className="text-black hover:underline">
            Women
          </a>
          <a href="#" className="text-black hover:underline">
            Kids
          </a>
          <a href="/all-products" className="text-black hover:underline">
            SNKRS
          </a>
        </nav>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar (hidden on small screens) */}
          <div className="hidden lg:flex items-center bg-slate-100 rounded-full px-3 py-1 w-[180px] h-[40px] relative">
            <CiSearch className="text-black" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent outline-none text-sm flex-grow pl-8 absolute "
            />
          </div>

          {/* Icons */}
          <FaRegHeart className=" w-6 h-6" />

          <BsBag className="w-6 h-6" />

        </div>

        {/* Mobile Menu (visible only on small screens) */}
        <button className="md:hidden text-black text-lg">
       <GiHamburgerMenu />
      
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className="md:hidden bg-white w-full px-4 py-3 hidden" id="mobile-menu">
        <a href="#" className="block text-black py-1 hover:underline">
          New & Featured
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Men
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Women
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          Kids
        </a>
        <a href="#" className="block text-black py-1 hover:underline">
          SNKRS
        </a>
      </div>
    </header>
    </div>
  )
};

    export default Navbar;


