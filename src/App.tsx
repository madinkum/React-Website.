import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import About from "./Components/About";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="skills" element={<Skills />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
