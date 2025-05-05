// Popup2.js
import React from 'react';

function Popup2({ onClose, onBack, onNext }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <h2 className="text-lg font-bold mb-4">Popup 2</h2>
        <div className="flex justify-end gap-2">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600"
            onClick={onClose}
          >
            Close
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600"
            onClick={onBack}
          >
            Back to Popup 1
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
            onClick={onNext} // Trigger opening Popup3
          >
            Next popup
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup2;
