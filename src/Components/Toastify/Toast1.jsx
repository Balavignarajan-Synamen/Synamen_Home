import React from "react";
import { Bounce, Flip, Zoom } from "react-toastify";
import { ToastContainer, toast } from "react-toastify";

const Toast1 = () => {
  const notify = () => {
    //    toast("First notification");
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
    });
  };

  const notify2 = () => {
    toast.error('🦄 Wow so easy!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
        });
  };


  const notify3 = () => {
    toast.info('🦄 Wow so easy Coloured flip!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Flip,
        });
  }

  return (
    <div>
      <button
        onClick={notify}
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Notify
      </button>

      <button
        onClick={notify2 }
        class="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Notify 2 red
      </button>

      <button
        onClick={notify3 }
        class="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Notify 2 red
      </button>

      <ToastContainer />
    </div>
  );
};

export default Toast1;
