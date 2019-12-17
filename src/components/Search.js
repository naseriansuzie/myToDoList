import React from "react";

const Search = props => (
  <div>
    <div>
      <input
        className="input-box"
        placeholder="search..."
        value={props.searchVal}
        onChange={props.searchHandle}
      />
    </div>
  </div>
);
export default Search;
