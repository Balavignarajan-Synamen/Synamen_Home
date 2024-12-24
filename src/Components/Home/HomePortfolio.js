import React from 'react';
import rock from '../ImagesHome/Portfolio/1663421760-rock-n-shop.webp'
import parikshan from '../ImagesHome/Portfolio/parikshan.webp'
import nammaboomi from '../ImagesHome/Portfolio/Nammabommi.webp'
import ultra from '../ImagesHome/Portfolio/ultra.webp'
import clicxo from '../ImagesHome/Portfolio/clixco.webp'
import Sundari from '../ImagesHome/Portfolio/sundari.webp'



function HomePortfolio() {
  return (
    <div className="bg-white p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Portfolio</h1>
      <p className="text-center mb-8">
        Our portfolio contains a wide range of businesses small & large, built on different technologies and scales to suit their individual requirements.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={rock} alt="Rock N Shop E-Commerce" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Rock N Shop E-Commerce</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={parikshan} alt="Parikshan" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Parikshan</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={nammaboomi} alt="Nammaboomi" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Nammaboomi</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={ultra} alt="Elgi Ultra Kitchen Appliances" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Elgi Ultra Kitchen Appliances</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={clicxo} alt="Clicxo E-Commerce Portal" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Clicxo E-Commerce Portal</h2>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <img src={Sundari} alt="Sundari Silks" className="w-full h-40 object-cover rounded-t-lg" />
          <h2 className="text-xl font-semibold mt-2">Sundari Silks</h2>
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="bg-black text-white py-2 px-4 rounded">View all</button>
      </div>
    </div>
  );
}

export default HomePortfolio;
