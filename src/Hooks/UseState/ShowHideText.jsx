import React, { useState } from 'react'

const ShowHideText = () => {

const [show, setShow] = useState(false);
console.log(show);

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <button
            onClick={() => setShow(!show)}
            className="px-4 py-2 mb-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
            {show ? 'Hide' : 'Show'} Text
        </button>

     {/* If show is true → show this message */}
      {/* {show && <p>Hello, welcome to React!</p>} */}

      {/* If show is false → show instruction */}
      {/* {!show && <p>Click the button to see the message</p>} */}

      {/* Ternary oprator condition  */}
      {show ? 'Hello, welcome to React!' : 'Click the button to see the message'}


    </div>
)
}

export default ShowHideText



// // 1️⃣ Import React and useState from the React library
// import React, { useState } from 'react';

// // 2️⃣ Create a functional component named ShowHideText
// function ShowHideText() {
//   // 3️⃣ Declare a state variable called 'show' with default value 'false'
//   const [show, setShow] = useState(false);

//   // 4️⃣ Return JSX to render UI
//   return (
//     <div>
//       {/* 5️⃣ Button to toggle show/hide state */}
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Hide' : 'Show'} Text
//       </button>

//       {/* 6️⃣ If show is true, show this <p> element */}
//       {show && <p>Hello, welcome to React!</p>}
//     </div>
//   );
// }

// // 7️⃣ Export this component so it can be used in other files
// export default ShowHideText;
