import React, { useState } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="mb-4 text-2xl">Count : {count}</h1>
      <div className="flex gap-4">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => {
            if (count > 0) {
             setCount(count - 1);
            }
        }}
        disabled={count===0}
             >Decrement</button>
        <button onClick={() => setCount(0)}>Rest</button>
      </div>
    </div>
  );
};

export default UseStateCounter;
