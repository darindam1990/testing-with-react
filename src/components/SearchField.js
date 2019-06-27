import React from "react";
import '../css/SearchField.css'

export const SearchField = (props) => {
  return (
    <input className="SearchField" type="text" value={props.value} placeholder="Type to search" onChange={props.onSearch} />
  );
};