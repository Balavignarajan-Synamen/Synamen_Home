import React, { useState } from "react";
import Modal from "../TwoPopupOneBtn/Modal"

const Main = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState("");

  const openModal = (type) => {
    setFormType(type);
    setModalOpen(true);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <button
        onClick={() => openModal("form1")}
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Open Form 1 (Email & Password)
      </button>
      <button
        onClick={() => openModal("form2")}
        className="bg-green-600 text-white px-4 py-2 rounded-md"
      >
        Open Form 2 (Phone & Name)
      </button>

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} formType={formType} />
    </div>
  );
};

export default Main;
