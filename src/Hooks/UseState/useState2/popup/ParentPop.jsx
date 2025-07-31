import React, { useState } from 'react'
import ChildPop from './ChildPop';

const ParentPop = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closePopup = () => {
        setIsOpen(false);
    } 

  return (
    
    <div className='p-10 text-center'>
         <button 
         onClick={() => setIsOpen(true)}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
         >Open Popup</button>
        {isOpen && <ChildPop onClose={closePopup}/>}
         

    </div>
  )
}

export default ParentPop