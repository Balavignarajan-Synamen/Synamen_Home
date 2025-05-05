// Popup3.js
import React from 'react';

const Popup3 = ({ onClose, onBack }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Popup 3</h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            onClick={onBack} // Go back to Popup 2
          >
            Back to Popup 2
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup3;
