import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const SearchBar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
    navigate("/course-list/" + input);
  };
  
  return (
    <div>
      <form
        onSubmit={onSearchHandler}
        className="flex items-center w-full h-1 max-w-xl bg-white border rounded border-gray-500/20 md:h-12"
      >
        <img
          src={assets.search_icon}
          alt="search_icon"
          className="w-10 px-3 md:w-auto"
        />
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search for cources"
          className="w-full h-full outline-none text-gray-500/80 "
        />
        <button
          type="submit"
          className="py-2 mx-1 text-white bg-blue-600 rounded md:px-10 px-7 md:py-3"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
