import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./style/about.css";


const About = () => {
  const [AboutPage, setAboutPage] = useState(null);
  const [show, setShow] = useState(false);
  const [Ingredient, setIngredient] = useState([]);
  const [Para, setPara] = useState([]);
  const [toggle, setToggle] = useState(false);


  const { id } = useParams();
  // const navigate = useNavigate();

  useEffect(() => {
    const datafetch = async () => {
      const data = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const response = await data.json();
      setAboutPage(response.meals ? response.meals[0] : null);
    };

    datafetch();

  }, [id]);
  if (!AboutPage) {
    return (
      <div className="about-page">
        <center>Loading...</center>
      </div>
    ); // or handle the loading state more elegantly
  }
  const handleFav = () => {
    setToggle(true)
  
    

   

  };
  const handlebtn1 = () => {
    setShow(false);
    pointarray();
  };

  const handlebtn2 = () => {
    setShow(true);
    updateIngredients();
  };
  const updateIngredients = () => {
    const update = [];
    for (var i = 1; i <= 20; i++) {
      const mesaure = `strMeasure${i}`;
      const ingred = `strIngredient${i}`;
      if (AboutPage[ingred] && AboutPage[mesaure]) {
        update.push(` ${AboutPage[ingred]},${AboutPage[mesaure]}`);
      }
    }
    setIngredient(update);
  };
  const paragrapgh = AboutPage.strInstructions;
  const pointarray = () => {
    const updatePointArray = paragrapgh.split(".");
    const sortarray = updatePointArray.filter((item) => item !== "");
    setPara(sortarray);
  };

  return (
    <>
      <div className="about-page">
        <div className="about-container">
          <div className="about-row">
            <img src={AboutPage.strMealThumb} alt={AboutPage.strMeal} />
            <div className="about-row-name">
              <h1>{AboutPage.strMeal}</h1>
              <h3>{AboutPage.strTags}</h3>
              <h3>{AboutPage.strArea}</h3>
              <i className="fa-brands fa-youtube"></i>
              <a
                href={AboutPage.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
              >
                {AboutPage.strYoutube}
              </a>{" "}
              <br />
              <button onClick={handleFav}>
                {toggle ? "Favorate Now" : "Add To Favourate"}
              </button>
            </div>
          </div>
          <div className="about-toggle">
            <div className="about-btn">
              <button onClick={handlebtn2}>Ingredient</button>
              <button onClick={handlebtn1}> Instruction</button>
            </div>
          </div>
          {show ? (
            <div className="about-data">
              {" "}
              <ol>
                {Ingredient.map((item, index) => (
                  <>
                    <div className="ingredient" >
                      <li key={index}>{item}</li>
                    </div>
                  </>
                ))}{" "}
              </ol>
            </div>
          ) : (
            <div className="about-data2">
              {" "}
              <div className="Instruction">
                {/* <p>{AboutPage.strInstructions}</p> */}
                <ol>
                  {Para.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                  {show ? <li>Finsih</li> : ""}
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default About;
