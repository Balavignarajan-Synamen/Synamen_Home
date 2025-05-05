import { IoMdClose } from "react-icons/io";
export default function DeletepopModel({ open, onclose, children }) {
  return (
    <>
      <div
        onClick={onclose}
        className={`fixed inset-0 flex justify-center items-center transition-colors
            ${open ? "visited:bg-black/20" :"invisible"}
            `}
      >
        {/* Model  */}
        <div onClick={(e)=> e.stopPropagation()} 
        className={`bg-white rounded-xl shadow p-6 transition-all 
        ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
            `}>
                <button onClick={onclose} className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600">
                <IoMdClose />
                </button>

        {children}
        </div>

      </div>
    </>
  );
}
