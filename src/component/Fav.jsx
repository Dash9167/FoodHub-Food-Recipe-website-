import React from "react";
// import { useParams } from 'react-router-dom'
import "./style/favv.css";

const Fav = ({ favlist }) => {
  return (
    <div className="fav">
      <div className="fav-container">
        <h1>Favourate List</h1>

        <div className="fav-list-row">
          <img
            src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
            alt=""
          />
          <div className="fav-item">
            {favlist ? favlist : "no data found"}
            <h2>Pancakes</h2>
            American <br/>Breakfast,Desert,Sweet,Fruity
          </div>
          <div className="btn-remove">
            <button>Remove</button>
          </div>
        </div>
        <div className="fav-list-row">
          <img
            src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
            alt=""
          />
          <div className="fav-item">
            {favlist ? favlist : "no data found"}
            <h2>Pancakes</h2>
            American <br/>Breakfast,Desert,Sweet,Fruity
          </div>
          <div className="btn-remove">
            <button>Remove</button>
          </div>
        </div>
        <div className="fav-list-row">
          <img
            src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
            alt=""
          />
          <div className="fav-item">
            {favlist ? favlist : "no data found"}
            <h2>Pancakes</h2>
            American <br/>Breakfast,Desert,Sweet,Fruity
          </div>
          <div className="btn-remove">
            <button>Remove</button>
          </div>
        </div>
        <div className="fav-list-row">
          <img
            src="https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg"
            alt=""
          />
          <div className="fav-item">
            {favlist ? favlist : "no data found"}
            <h2>Pancakes</h2>
            American <br/>Breakfast,Desert,Sweet,Fruity
          </div>
          <div className="btn-remove">
            <button>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fav;
