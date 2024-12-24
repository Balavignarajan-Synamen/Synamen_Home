import React from 'react';
import logosynamen from '../Assests/Image/images.png';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaGripLinesVertical } from "react-icons/fa";

function FooterHome() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <img src={logosynamen} alt="SYNAMEN Logo" className="h-20 w-40 mb-4" />
            <p className="text-sm mb-4">
              Synamen is an Internet consulting company focusing on efficient use of Internet and Web technologies in business. We are into E-Commerce Development, Magento Development and Mobile App Development Services.
            </p>
            <a href="#" className="text-[#ABD418] text-sm flex items-center">Read More <MdKeyboardDoubleArrowRight className='ml-1' /> </a>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2 flex items-center"><FaGripLinesVertical className='mr-2 text-[#ABD418]' /> Solutions</h3>
            <ul className="text-sm">
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> E-Commerce Development</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Magento E-Commerce Management</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Mobile App Development</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Oracle Cloud Solutions</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-bold mb-2 flex items-center"><FaGripLinesVertical className='mr-2 text-[#ABD418]' /> Products</h3>
            <ul className="text-sm">
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]'/> Field Service Management Platform</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Mobile E-Commerce Solution</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Energy Management & Industrial Analytics</a></li>
              <li><a href="#" className="flex items-center"><MdKeyboardDoubleArrowRight className='mr-1 text-[#ABD418]' /> Enquiry Management System</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-bold mb-2 flex items-center"><FaGripLinesVertical className='mr-2 text-[#ABD418]' /> Reach Us</h3>
            <p className="text-sm mb-4">
              Synamen Thinklabs Pvt Ltd<br />
              #7, Second Floor, Seetha Nagar Main Road,<br />
              Nungambakkam, Chennai - 600034. India.
            </p>
            <p className="text-sm mb-4">
              <a href="tel:+918939679369" className=" flex items-center"><FaPhone className='mr-1' /> +91-89396 79369</a><br />
              <a href="mailto:info@synamen.com" className=" flex items-center"><MdOutlineMailOutline className='mr-1' /> info@synamen.com</a>
            </p>
            <div className="flex space-x-2 mt-2">
              <a href="#" className="text-gray-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-youtube"></i></a>
              <a href="#" className="text-gray-500"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-sm mt-8">
          © 2007 - 2024 Synamen Thinklabs Pvt Ltd. All rights reserved <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default FooterHome;
