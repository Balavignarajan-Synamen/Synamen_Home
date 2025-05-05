import React from "react";

const Modal = ({ isOpen, onClose, formType }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1>BALA</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">
          {formType === "form1" ? "Login" : "Register"}
        </h2>

        {/* Form Content */}
        {formType === "form1" ? (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">
              Submit
            </button>
          </form>
        ) : (
          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Enter name"
              />
            </div>
            <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-md">
              Register
            </button>
          </form>
        )}

        {/* Close Button */}
        <button onClick={onClose} className="mt-4 w-full bg-gray-500 text-white py-2 rounded-md">
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
