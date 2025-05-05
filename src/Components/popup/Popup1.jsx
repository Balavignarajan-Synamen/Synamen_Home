// Popup1.js
import React from 'react';

function Popup1({ onNext, onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Popup 1</h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup1;
