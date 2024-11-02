import React from "react";
import "./style/home.css";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
navigate('/favourate')
  }
  return (
   <>
    <div className="home">
      <div className="home-img">
        <h1>Learn cook,share & made cooking easy. </h1>
      </div>
      <div className="home-content">
        <p>
          Learning cooking and sharing culinary creations has never been easier.
          Dive into a world of delicious recipes, curated tips, and step-by-step
          guides designed to make cooking a delightful experience for everyone.
        </p>
        <div className="item">
            <h3>Breakfast</h3> <i>|</i>
            <h3>Lunch</h3><i>|</i>
            <h3>Dinner</h3><i>|</i>
            <h3>Desert</h3>

        </div>
        <button onClick={handleClick}>Learn Now</button>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Home;
