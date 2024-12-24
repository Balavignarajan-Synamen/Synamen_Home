import React from 'react';
import magentoLogo from '../ImagesHome/magento-commerce.webp'; 

function HomeManagement() {
  return (
    <div className="bg-white p-8">
      <div className="text-center mb-8">
        <h2 className=" tracking-wide">Featured Service</h2>
        <h1 className="text-4xl font-bold text-gray-900">Magento Management</h1>
        <p className="text-gray-600 mt-2">
          Running a Magento e-commerce store can be challenging for the uninitiated. But it can do wonders when you understand the technology and <br></br> use it correctly.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <img src={magentoLogo} alt="Magento Commerce" className="w-90 h-auto" />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Magento Commerce</h2>
          <p className="text-gray-600 mb-4">
            Magento is the leading Ecommerce platform with built-in PHP. It comes in different flavours right from open source to a cloud hosted solution. Our strong Magento ecommerce development team can ease your Magento application woes by handling the technical aspects and enabling you to focus on your business. You will get the best Magento developers working for you.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-2">We are a full service Magento shop. Our services include:</h3>
          <ul className="list-disc list-inside text-gray-600">
            <li>Magento Store Design & Development</li>
            <li>Application Support</li>
            <li>Hosting & Server Administration</li>
            <li>Extension Development</li>
            <li>Application Audit & Optimization</li>
            <li>Mobile App Development</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomeManagement;
