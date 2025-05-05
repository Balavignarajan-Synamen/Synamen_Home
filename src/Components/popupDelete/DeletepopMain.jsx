import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import DeletepopModel from './DeletepopModel';
const DeletepopMain = () => {
    const [open, setOpen] = useState(false)
  return (
    <>
    <main>
        <button className='text-white  bg-red-700 p-2 rounded-lg'
         onClick={() => setOpen(true)}
        >
        <FaTrashAlt /> Delete
        </button>
     
      <DeletepopModel open={open} onclose={() => setOpen(false)}>
        <div className='text-center w-56'>
        <FaTrashAlt size={56} className='mx-auto text-red-500 ' /> 
     <div className='mx-auto my-4 w-48'>
    <h3 className='text-lg font-black text-gray-800 '>Confirm delete</h3>
    <p className='text-sm text-gray-500'>
        Are you sure you want to delete this item
    </p>
     </div>
     <div className='flex gap-4 justify-center'>
        <button className='text-white  bg-red-700 p-2 rounded-lg'>Delete</button>
        <button onClick={() => setOpen(false)} 
        className='text-white  bg-gray-700 p-2 rounded-lg'>cancel</button>


     </div>
        </div>
      </DeletepopModel>


    </main>
    
       
    </>
  )
}

export default DeletepopMain