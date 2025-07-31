import React, { useState } from "react";

const FormUse = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }
//    Explanation:
//     This is a function that toggles the password visibility.
//     !showPassword means: if it’s false, make it true; if it’s true, make it false.
//     So each click flips the state.

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <input
        type="text"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      
      <input 
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter a password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />

      <button onClick={togglePassword}>
         {showPassword ? 'Hide' : 'Show'}
      </button>

     <hr style={{ margin: '20px 0' }} />
      
      <p>You typed :</p>
      <p>Name :{name}</p>
      <p>Email :{email}</p>
      <p>Password : {showPassword ? password : '*'.repeat(password.length)}</p>
    </div>
  );
};

export default FormUse;
