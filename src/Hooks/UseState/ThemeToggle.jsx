import React, { useState } from 'react'

const ThemeToggle = () => {

 const [darkMode, setDarkMode] = useState(false);

const pageStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    height: "100vh",
    width: "100vh",
    textAlign: "center",
    paddingTop: "50px"
  };

  return (
    <div style={pageStyle}>

         <h1>{darkMode ? "Dark" : "Light"} Mode</h1>
        <button
        onClick={()=> setDarkMode(!darkMode)}
        >
            Toggle Theme
        </button>
    </div>
  )
}

export default ThemeToggle