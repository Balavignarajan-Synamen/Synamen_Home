import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSucces] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("**please fill all the feilds**");
      setSucces("");
    } else {
      console.log("Email :", email, "Password :", password);
      alert(`Email: ${email}, Password: ${password}`);
      setEmail("");
      setPassword("");
      setError("");
      setSucces("Login successful!");
    }
  };

  const togglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            placeholder="Enter Your Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={togglePassword}>
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <button type="submit">Login</button>
      </form>
      <p className="text-red-600">{error}</p>
      <p className="text-green-700">{success}</p>
    </div>
  );
};

export default LoginForm;
