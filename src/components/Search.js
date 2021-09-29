import React from "react";

function Search(props) {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => props.setSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
} 

export default Search;
