import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
// User Interface
import Home from "./components/home";
import About from "./components/about";
import Search from "./components/search";
import Advertise from "./components/advertise";
import Help from "./components/help";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
