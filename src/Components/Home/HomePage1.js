import React from 'react'
import page1bg from '../ImagesHome/bgfirst.webp'

function HomePage1() {
  return (
    <div>
         
         <h1 className='flex justify-center items-center text-5xl font-bold text-black-800'>E-COMMERCE CONSULTANTS</h1>
         <p className='flex justify-center items-center text-1xl p-5 text-center' >
          Are you planning to sell your products or sevices online and looking for the right
          <br></br>
          solution? Our Seasoned E-commerce consultants will provide perfect solution
          <br></br>
          suits your business. Contact us  get business ideas implemented at light speed.
         </p>
          
          <img src={page1bg}/>


    </div>
  )
}

export default HomePage1