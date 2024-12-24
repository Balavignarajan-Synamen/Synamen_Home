import React from 'react';
import https from '../ImagesHome/httpsdedline.webp'
import google from '../ImagesHome/google.webp'
import mobileadv from '../ImagesHome/mobile-advertising.webp'

function HomeBlog() {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Blog</h1>
      <p className="text-center mb-8">
        We often document our experiences in handling various challenges while supporting our customers. We hope these learnings are useful to <br></br> you in managing your business. If you found any of these useful, please drop us a note and make our day.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-100 text-center p-6 rounded-lg shadow-lg">
          <img src={https} alt="HTTPS Deadline" className="w-full h-40 object-cover rounded-t-lg mb-4" />
          <p className="text-gray-800 mb-2"><small className="text-[#ABD418]">14 Mar 2018</small></p>
          <p className="text-gray-600">A deadline has been set by Google for HTTPS and warns developers to update.</p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow-lg">
          <img src={google} alt="Ranking vs Mobile PageSpeed" className="w-full h-40 object-cover rounded-t-lg mb-4" />
          <p className="text-gray-600 mb-2"><small className="text-[#ABD418]">22 Jan 2018</small></p>
          <p className="text-gray-600">PageSpeed to be used as a ranking signal in mobile search also after its...</p>
        </div>
        <div className="bg-gray-100 p-6 text-center rounded-lg shadow-lg">
          <img src={mobileadv} alt="Mobile Advertising" className="w-full h-40 object-cover rounded-t-lg mb-4" />
          <p className="text-gray-600 mb-2"><small className="text-[#ABD418]">11 Jan 2018</small></p>
          <p className="text-gray-600">Adding mobile advertising platform into your Ionic mobile app.</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-black text-white py-2 px-4 rounded">View all</button>
      </div>
    </div>
  );
}

export default HomeBlog;
