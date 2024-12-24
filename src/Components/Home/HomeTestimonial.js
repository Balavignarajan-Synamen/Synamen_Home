import React from 'react';
import { FaStar } from 'react-icons/fa';
import raja from '../ImagesHome/1664954205-raja-spiritual.webp';
import testi from '../ImagesHome/testimonials-right.webp';

function HomeTestimonial() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="p-6  mb-8">
            <p className="mb-8">
              "We (Raja Spiritual Super Market PVT limited, Kanchipuram) contemplated and went for E-Commerce with M/s. Synamen instead of opening another branch. In a niche area, we are getting business from all over the world. The smart and swift working style of M/s. Synamen matters for our success. We have also planned to start other new initiatives and M/S Synamen will be working along with us in developing the project. And with their new service in Digital Marketing, we plan to go with them all under one roof now."
            </p>
            <div className="flex items-center">
              <img src={raja} alt="Mr. Rajavel C" className="w-16 h-16 rounded-full mr-4" />
              <div>
                <p className="font-bold">Mr. Rajavel C</p>
                <p>Raja Spiritual Super Market PVT Ltd</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          
           
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src={testi} alt="Testimonials" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default HomeTestimonial;
