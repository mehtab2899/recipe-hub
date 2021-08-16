import React, { useEffect, useState } from "react";
import axios from "axios";

const Recipes = () => {
  const app_id = "70cc488e";
  const app_key = "0e9fab54efcdd4fad8420a04db270554";

  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async () => {
    const response = await axios.get(
      `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}&from=0&to=12&calories=591-722&health=alcohol-free`
    );
    setRecipes(response.data.hits);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  console.log(recipes);

  return (
    <div>
      <h1>Recipe Hub 🥘</h1>
      <div className="recipes">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter recipe"
          />
          <button type="submit">Search</button>
        </form>
        <div className="recipes__cards">
          {recipes.map((recipe, index) => {
            return (
              <div key={index}>
                <img src={recipe.recipe.image} alt="" />
                <h2>{recipe.recipe.label}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
