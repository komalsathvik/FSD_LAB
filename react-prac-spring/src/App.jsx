import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InputSpring from "./InputSpring";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import Display from "./Display.jsx";
// import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
