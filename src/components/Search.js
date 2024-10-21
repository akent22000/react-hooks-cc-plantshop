import React, { useState } from "react";

function Search({ onSearchChange, search }) {

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={search}
        placeholder="Type a name to search..."
        onChange={e => onSearchChange(e.target.value)}
      />
    </div>
  );
}

export default Search;
