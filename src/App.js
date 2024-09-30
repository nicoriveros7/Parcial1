import "./App.css";
import Login from "./Login";
import Home from "./Home";
import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      {isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;
