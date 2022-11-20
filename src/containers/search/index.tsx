import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResults from "./searchResults";
import StockProfile from "./stockProfile";

function Search() {
  return (
    <Routes>
      {/* result listing */}
      <Route path="/" element={<SearchResults />} />
      {/* single result details */}
      <Route path=":id" element={<StockProfile />} />
    </Routes>
  );
}

export default Search;
