import React, { useState } from "react";
import "./App.css";

import Search from "./Components/Search/Search";
import Context from "./Context/Context";
import Result from "./Components/Result/Result";

const App = () => {
  const [search, setSearch] = useState("");
  const [searchCount, setSearchCount] = useState(0);
  return (
    <div className="app">
      <Context.Provider
        value={{
          search: search,
          setSearch: setSearch,
          searchCount: searchCount,
          setSearchCount: setSearchCount,
        }}
      >
        <div className="card">
          <Search />
          <Result />
        </div>
      </Context.Provider>
    </div>
  );
};

export default App;
