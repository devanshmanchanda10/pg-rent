import { useState } from "react";
import "./searchBar.scss";
import { useNavigate } from "react-router-dom";

const types = ["buy", "rent"];

function SearchBar() {
  const navigate = useNavigate()
  const handleRedirect = () => {
    navigate("/list"); // Redirect to /list
  };
  
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text"  placeholder="City Location (Dwarka)" />
        <input
          type="number"
          
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button onClick={handleRedirect}>
          <img src="/search.png" alt="" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
