import React from 'react';
import Rock from '../ImagesHome/1663421760-rock-n-shop.webp'
import industry from '../ImagesHome/1663421807-industrykart.webp'
import pickaboo from '../ImagesHome/1663421847-pickaboo.webp'

function HomeCaseStudy() {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Case Studies</h1>
      <p className="text-center mb-12">
        Every business is unique, and comes with its own challenges and opportunities. We don’t put all our projects into the same mold, instead match and adapt the solutions to your own needs. Here are some case studies of various businesses that we support.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={Rock} alt="Rock N Shop" className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold mb-2">Rock N Shop - Magento Migration from v1.8 to v2.3</h2>
          <a href="#" className="text-[#ABD418] font-bold">READ MORE</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={industry} alt="Industrykart" className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold mb-2">Industrykart - Online store for industry supplies...</h2>
          <a href="#" className="text-[#ABD418] font-bold">READ MORE</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={pickaboo} alt="Pickaboo" className="w-full h-48 object-cover mb-4 rounded" />
          <h2 className="text-xl font-semibold mb-2">Pickaboo - Multivendor E-Commerce Platform for Sma...</h2>
          <a href="#" className="text-[#ABD418]  font-bold">READ MORE</a>
        </div>
      </div>
    </div>
  );
}

export default HomeCaseStudy;
