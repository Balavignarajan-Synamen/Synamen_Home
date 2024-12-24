import React, { useState } from 'react';
// ICONS
import { CgMail } from "react-icons/cg";
import { IoIosCall } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";

import logosynamen from '../Assests/Image/images.png';

function NavHome() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white font-sans">
   
      <div className="flex justify-end items-center p-2 bg-gray-100 space-x-4">
        <a href="mailto:info@synamen.com" className="flex items-center text-gray-600"><CgMail className="mr-1" /> info@synamen.com</a>
        <a href="tel:+918939679369" className="flex items-center bg-[#ABD418] text-white px-2 py-1 rounded"><IoIosCall className="mr-1" /> +91-89396 79369</a>
        <span className="flex items-center text-gray-600"><FaLocationDot className="mr-1" /> Reach Us</span>
      </div>

     
      <div className="flex justify-between items-center p-4">
        <img src={logosynamen} alt="SYNAMEN Logo" className="h-20 w-40" />
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
        <nav className={`flex-col md:flex-row md:flex md:space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
          <a href="#" className="text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Home</a>
          <div className="relative group">
            <a href="#" className="text-gray-600 hover:text-[#ABD418] flex items-center transition-colors duration-300 ease-in-out">Solutions <IoMdArrowDropdown className="ml-1" /></a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 w-48">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">E-commerce Development</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Magneto E-commerce Management</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Mobile App Development</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Oracle Cloud Solution</a>
            </div>
          </div>
          <div className="relative group">
            <a href="#" className="text-gray-600 hover:text-[#ABD418] flex items-center transition-colors duration-300 ease-in-out">Products <IoMdArrowDropdown className="ml-1" /></a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 w-48">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Field Service Management Platform</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Splurgify for M-commerce</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">MeterDesk-Energy Management & Industrial Analytics</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Enquiry Management</a>
            </div>
          </div>
          <a href="#" className="text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Portfolio</a>
          <div className="relative group">
            <a href="#" className="text-gray-600 hover:text-[#ABD418] flex items-center transition-colors duration-300 ease-in-out">Company <IoMdArrowDropdown className="ml-1" /></a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 w-48">
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">About Us</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Our Team</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">News</a>
              <a href="#" className="block px-4 py-2 text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Reach Us</a>
            </div>
          </div>
          <a href="#" className="text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Careers</a>
          <a href="#" className="text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Blog</a>
          <a href="#" className="text-gray-600 hover:text-[#ABD418] transition-colors duration-300 ease-in-out">Reach Us</a>
        </nav>
      </div>
    </div>
  );
}

export default NavHome;
