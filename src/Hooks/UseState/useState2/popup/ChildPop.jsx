import React from 'react'

const ChildPop = ({onClose}) => {
  return (
   
    <div>
        <div className='fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center'>
            <div className='bg-white p-6 shadow-lg w-72 text-center'>
                <h2 className='text-xl font-bold mb-4'>This is the Popup</h2>
                <button
                onClick={onClose}
                className='bg-red-500 px-4 py-2 rounded-xl text-white'
                >Close</button>
            </div>
        </div>
    </div>
  )
}

export default ChildPop