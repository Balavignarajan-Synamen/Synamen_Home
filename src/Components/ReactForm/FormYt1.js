import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormYt1 = () => {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");

  const [inputs, setInputs] = useState({});

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    // console.log('current State', name);
    // console.log('current State', age);
    // console.log('current State', email);
    console.log("current State", inputs);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="bg-blue-400 p-10 pt-10">
        <label>
          Enter Your Name:
          <input
            className=""
            type="text"
            onChange={(e) => {
              setInputs((prev) => {
                return { ...prev, name: e.target.value };
              });
            }}
          />
          <br></br>
        </label>
        <br></br>
        <label>
          Enter Your Age:
          <input
            type="text"
            onChange={(e) => {
              setInputs((prev) => {
                return { ...prev, age: e.target.value };
              });
            }}
          />
          <br></br>
        </label>
        <br></br>
        <label>
          Enter Your Email:
          <input
            type="text"
            onChange={(e) => {
              setInputs((prev) => {
                return { ...prev, email: e.target.value };
              });
            }}
          />
        </label>
        <br></br>
        <button type="submit" className="mt-4 w-full h-6 bg-red-800 text-white">
          Submit
        </button>

        <Link to="/reactform2">
          <button className="bg-yellow-400 mt-4">Next page</button>
        </Link>
      </form>
    </div>
  );
};

export default FormYt1;
