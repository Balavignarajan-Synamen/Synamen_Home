import React from 'react';
import { TbView360Number } from "react-icons/tb";
import { FaBullseye, FaHeadSideVirus } from "react-icons/fa6";

function HomeAbout() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-gray-600">
          Our Ecommerce consulting company serves customers across the world, in diverse industry domains to achieve 
          their e-commerce business goals using our deep industry expertise and insight. We can enable your e-commerce 
          business for rapid growth without any technological bottlenecks.
        </p>
      </div>
      <div className="flex flex-wrap justify-center md:space-x-10    max-w-6xl mx-auto mb-12">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/4 mb-4 md:mb-0">
          <TbView360Number className="text-6xl text-[#ABD418] mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">360 Degree Intelligence</h2>
          <p className="text-gray-600">
            Maximise your brand potential and drive sales through our brand and sales activation strategies. Fix your brand's attributes in your customer's.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/4 mb-4 md:mb-0">
          <FaBullseye className="text-6xl text-[#ABD418] mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Marketing Focused Approach</h2>
          <p className="text-gray-600">
            Unleash the power of futuristic technology and strategic marketing intelligence to make your mark on the business landscape!
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/4">
          <FaHeadSideVirus className="text-6xl text-[#ABD418] mb-4 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">High Technical Capabilities</h2>
          <p className="text-gray-600">
            Create Business value through Synamen's Ecommerce consulting team's cross-platform, multi-industry experience.
          </p>
        </div>
      </div>
      {/* Footer Section */}
      <div className="bg-[#ABD418] text-black py-6 w-full">
        <div className="flex flex-wrap justify-around max-w-6xl mx-auto">
          <div className="text-center mb-4 md:mb-0">
            <p className="text-4xl font-bold">16+</p>
            <p>Years in Business</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="text-4xl font-bold">500+</p>
            <p>Successful Projects</p>
          </div>
          <div className="text-center mb-4 md:mb-0">
            <p className="text-4xl font-bold">15</p>
            <p>Countries We Serve</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">1M+</p>
            <p>Users Impacted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeAbout;
