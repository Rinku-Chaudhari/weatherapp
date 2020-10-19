import React from "react";

const Context = React.createContext({
  search: "",
  setSearch: () => {},
  searchCount: 0,
  setSearchCount: () => {},
});

export default Context;
