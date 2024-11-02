import React, {   } from "react";
import { useNavigate } from "react-router-dom";
const Searchfood = ({ name }) => {
   const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/about/${name.idMeal}`)
  };
  return (
  
   <div className="item-food">
    <div className="item-img">
      <img src={name.strMealThumb} alt={name.strMeal} />
    </div>
    <div className="item-des">
      <h1> {name.strMeal}</h1>
      <h2> {name.strArea}</h2>
      <h2 className="green">{name.strTags}</h2>
      <button onClick={handleClick}>Cook Now</button>
    </div>
   
  
  </div>
  );
};

export default Searchfood;
