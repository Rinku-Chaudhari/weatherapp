import React, { useContext } from "react";
import "./Search.css";

import Context from "../../Context/Context";
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
  const context = useContext(Context);
  const submitHandler = (e) => {
    e.preventDefault();
    context.setSearchCount((prev) => prev + 1);
  };

  return (
    <div className="search">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search here"
          value={context.search}
          onChange={(e) => context.setSearch(e.target.value)}
        />
        <button type="submit">
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default Search;
