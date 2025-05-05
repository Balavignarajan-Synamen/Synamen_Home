import React, { useState } from "react";

const FormYt2 = () => {
  const [inputs, setInputs] = useState({ phone: "+91", email: "@gmail.com" });

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted");
    console.log("current State", inputs);
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <div>
      <h2 className="font-bold text-center">Form Yt 2</h2>
      <form onSubmit={handleSubmit} className="bg-blue-400 p-10 pt-10">
        <label>
          Enter Your Name:
          <input type="text" name="name" onChange={handleChange} />
          <br></br>
        </label>
        <br></br>
        <label>
          Enter Your Age:
          <input type="text" name="age" onChange={handleChange} />
          <br></br>
        </label>
        <br></br>
        <label>
          Enter Your Email:
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter Your Phone Number:
          <input
            type="text"
            name="phone"
            value={inputs.phone}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <br></br>
        <label>
          Enter Your country:
          <select name="country" onChange={handleChange} value={inputs.country}>
            <option value="">select</option>
            <option value="Australia">Australia</option>
            <option value="India">India</option>
            <option value="UAE">UAE</option>
          </select>
        </label>
        <br></br>
        <br></br>
        <label>
          Enter about you:
          <textarea
            name="about"
            onChange={handleChange}
            value={inputs.about}
          ></textarea>
        </label>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormYt2;
