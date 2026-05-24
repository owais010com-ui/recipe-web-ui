import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {

  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]);
  const [tags, setTags] = useState([]);
  const [search, setSearch] = useState("");
  const [selectTag, setSelectTag] = useState("");
  const [loading, setLoading] = useState(false);


  useEffect(() => {

    const getRecipes = async () => {
      const res = await axios.get("https://dummyjson.com/recipes");

      setRecipes(res.data.recipes);
      setAllRecipes(res.data.recipes);
    };

    const getTags = async () => {
      const res = await axios.get("https://dummyjson.com/recipes/tags");

      setTags(res.data);
    };

    getRecipes();
    getTags();

  }, []);

  useEffect(() => {

    let filtered = allRecipes;

    if (selectTag) {
      filtered = filtered.filter((item) =>
        item.tags.includes(selectTag)
      );
    }

    if (search) {

      setLoading(true);

      setTimeout(() => {

        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(search.toLowerCase())
        );

        setRecipes(filtered);
        setLoading(false);

      }, 400);

    } else {
      setRecipes(filtered);
      setLoading(false);
    }

  }, [search, selectTag, allRecipes]);

  return (
    <div className="container">

      <h1>Recipe App</h1>

      <div className="filterBox">

        <input
          placeholder="Search recipe..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={selectTag}
          onChange={(e) => setSelectTag(e.target.value)}
        >
          <option value="">All</option>
          {tags.map((t, i) => (
            <option key={i} value={t}>{t}</option>
          ))}
        </select>

      </div>


      {loading && (
        <h2 style={{ textAlign: "center", color: "#ff4d6d" }}>
          Loading...
        </h2>
      )}


      {!loading && search && recipes.length === 0 && (
        <h2 style={{ textAlign: "center", color: "red" }}>
          Item Not Found 😢
        </h2>
      )}


      {!loading && (
        <div className="grid">

          {recipes.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>{item.cuisine}</p>
              <span>⭐ {item.rating}</span>
            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default App;