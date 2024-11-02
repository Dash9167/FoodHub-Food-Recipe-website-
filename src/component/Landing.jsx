import React from "react";
import "./style/navbar.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Favourate from "./Favourate";
import Fav from "./Fav";


export const Landing = () => {
  return (
    <BrowserRouter>
      <div className="navbar">
        <div className="nav-logo">
          <h2>
            Food <span>Hub</span>
          </h2>
        </div>
        <div className="nav-menu">
          <h3><Link to="/" className="Link">Home</Link></h3>
        
          <h3 ><Link to="/favourate" className="Link">Recipe</Link></h3>
          <h3 ><Link to="/fav" className="Link">Favourate</Link></h3>

        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about/:id" element={<About/>}></Route>
        <Route path="/favourate" element={<Favourate/>}></Route>
        <Route path="/fav" element={<Fav/>}></Route>


      </Routes>
    </BrowserRouter>
  );
};
