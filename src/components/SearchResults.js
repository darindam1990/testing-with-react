import React from "react";
import '../css/SearchResults.css'

export const SearchResults = (props) => {
  if (props.loading) {
    return (
      <div className="SearchResults_loading">
        <div>Loading</div>
        <span className="lds-dual-ring"></span>
      </div>
    );
  }
  if (props.results) {
    if (props.results.length) {
      return (
        <ul className="SearchResults_container">
          {props.results.map((o, i) => <li className="SearchResults_item" key={i}>
            {o.trackName} by {o.artistName}
          </li>)}
        </ul>
      );
    } else {
      return (
        < div className="SearchResults_container no_data"> No matches...</div >
      );
    }
  } else {
    return (<></>);
  }
};