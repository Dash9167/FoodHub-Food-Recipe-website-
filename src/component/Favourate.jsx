import React, { useState, useEffect } from "react";
import "./style/fav.css";
import Searchfood from "./Searchfood";
import { useForm } from "react-hook-form";
const Favourate = () => {
  const [searchFood, setSearchfood] = useState([]);
  const [foodHistory, setfoodHistory] = useState([]);

  const [search, setSearch] = useState("cake");
  const [loading, setLoading] = useState(false);
 

  const delay = (time) => {
    return new Promise((respose) => {
      setInterval(() => {
        respose();
      }, time * 1000);
    });
  };

  useEffect(() => {
    const fetchdata = async () => {
      await setLoading(true);
      delay(5);
      try {
        const data = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        );
        const response = await data.json();
        setSearchfood(response.meals || []);
      } catch (error) {
        console.log("error found : ", error);
      } finally {
        setLoading(false);
      }
    };
    if (search) {
      fetchdata();
    }
  }, [search]);

  const handleSearch = (data) => {
    clearErrors();
    setSearch(data.search);
    const history = [...foodHistory, data.search];
    setfoodHistory(history);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
    clearErrors,
  } = useForm();
  const lastFive = foodHistory.slice(-5);
  const lastFiveHistory = lastFive.filter(
    (item, index) => lastFive.indexOf(item) === index
  );

  return (
    <div className="Favourate">
    
        <div className="foodSearch">
          <div className="food">
            <form onSubmit={handleSubmit(handleSearch)}>
              <input
                type="text"
                {...register("search", {
                  required: {
                    value: true,
                    message: "Search box can't be empty",
                  },
                })}
              />
              <button type="submit">Search</button>
            </form>
          </div>
          {errors.search && (
            <div className="error-message">{errors.search.message}</div>
          )}

          <div className="history">
            <ul>
              {lastFiveHistory.map((item, index) => (
                <li key={index} onClick={() => setSearch(item)}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="search-item">
            {loading ? (
              <div className="loading"></div>
            ) : searchFood.length > 0 ? (
              searchFood.map((item, index) => (
                <Searchfood key={index} name={item} />
              ))
            ) : (
              <div className="white">No Result Found '{search}'</div>
            )}
          </div>
        </div>
     
    </div>
  );
};

export default Favourate;
