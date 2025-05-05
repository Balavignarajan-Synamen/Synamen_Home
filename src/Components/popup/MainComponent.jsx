// MainComponent.js
import React, { useState } from 'react';
import Popup1 from './Popup1';
import Popup2 from './Popup2';
import Popup3 from './Popup3';

function MainComponent() {
  const [showPopup1, setShowPopup1] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [showPopup3, setShowPopup3] = useState(false);

  const handleCreateClick = () => {
    setShowPopup1(true);
  };

  const handlePopup1Next = () => {
    setShowPopup1(false);
    setShowPopup2(true);
  };

  const handlePopup2Back = () => {
    setShowPopup2(false);
    setShowPopup1(true);
  };

  //popup3
  const handlePopup2Next = () => {
    setShowPopup2(false);
    setShowPopup3(true);  //open popup 3
  };

  const handlePopup3Back = () => {
    setShowPopup3(false);
    setShowPopup2(true); // Go back to Popup2
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <button
        id="create-btn"
        className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
        onClick={handleCreateClick}
      >
        Create
      </button>

      {showPopup1 && <Popup1 onNext={handlePopup1Next} onClose={() => setShowPopup1(false)} />}
      {showPopup2 && <Popup2 onClose={() => setShowPopup2(false)} onBack={handlePopup2Back} onNext={handlePopup2Next} />}
      {showPopup3 && <Popup3 onClose={() => setShowPopup3(false)} onBack={handlePopup3Back} />}
    </div>
  );
}

export default MainComponent;
