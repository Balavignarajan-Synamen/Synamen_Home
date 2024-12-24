import React from 'react';
import { GoStack } from "react-icons/go";
import { FaGift, FaLaptopFile } from "react-icons/fa6";
import { IoLeafSharp } from "react-icons/io5";

function HomeService() {
  return (
    <div className="min-h-screen bg-gray-200 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Services in E-Commerce</h1>
        <p className="text-lg text-gray-600">
          We provide 360° service to our customers combining our extensive business and technical knowledge related to web technologies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2  max-w-6xl mx-auto">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <GoStack className="text-4xl  text-blue-600 mb-4 " />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">E-Commerce Development</h2>
          <p className="text-gray-600 mb-4">
            Synamen offers E-Commerce development services that will allow your company to sell its products or services online. Our Ecommerce website development team will help you choose the right solution for your e-commerce portal. Be it an existing or a startup, grow your business to the next level. Our solutions are focused on creating better opportunities for more sales.
          </p>
          <a href="#" className="text-[#ABD418] font-bold">Read More</a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <FaGift className="text-4xl text-blue-600 mb-4 " />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Magento E-Commerce Management</h2>
          <p className="text-gray-600 mb-4">
            Magento’s E-Commerce platform provides retailers a robust and customised system to help scale & grow their online business. Our experienced Magento development services team will take care of everything – right from planning, building and launching your online store. With Magneto’s mobile compatible features and native development SDKs, you will be able to deliver excellent omnichannel user experiences to your customers.
          </p>
          <a href="#" className="text-[#ABD418] font-bold">Read More</a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <FaLaptopFile className="text-4xl text-blue-600 mb-4 " />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Mobile App Development</h2>
          <p className="text-gray-600 mb-4">
            Ecommerce mobile app development is an essential for every online business today. Having a customer-centric mobile application gives traction and visibility, accelerates your sales and growth. Synamen has the experience and expertise to help your startup, SMB or enterprise develop a reliable, intuitive, and useful mobile application for your employees and clients.
          </p>
          <a href="#" className="text-[#ABD418] font-bold">Read More</a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg">
          <IoLeafSharp className="text-4xl text-blue-600 mb-4 " />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Oracle Cloud Solutions</h2>
          <p className="text-gray-600 mb-4">
            Oracle Cloud applications are a convenient way to automate the business operations and integrate with Oracle Commerce Cloud storefront for Ecommerce. Oracle B2B commerce is a unified digital commerce solution that can handle your B2B sales efficiently. We provide quick and cost-effective implementation and support services for Oracle Cloud customers for sales & Ecommerce apps.
          </p>
          <a href="#" className="text-[#ABD418] font-bold">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default HomeService;
