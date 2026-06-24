import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Display from "./Display.jsx";
import Navbar from "./Navbar.jsx";
// import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
