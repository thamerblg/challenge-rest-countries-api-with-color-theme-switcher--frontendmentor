import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = ({ setTitleSearch, setRegionSearch }) => {
  return (
    <div className="search">
      <form
        onChange={(e) => {
          setTitleSearch(e.target.value);
        }}
      >
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <input
          type="text"
          placeholder="Search for a country..."
          name="search"
        />
      </form>
      <select
        onChange={(e) => {
          setRegionSearch(e.target.value);
        }}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default Search;
