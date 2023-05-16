import React from "react";
import { Link } from "react-router-dom";

const CountrieItem = ({ item }) => {
  return (
    <div className="card">
      <div className="card_img">
        <img src={item.flags.png} alt={item.flags.alt} />
      </div>
      <div className="card_body">
        <h2 className="card_title">
          <Link to={`/countrieDetails/${item.name}`}>{item.name}</Link>
        </h2>
        <p className="card_text">
          <b>Population:</b> {item.population}
        </p>
        <p className="card_text">
          <b>Region:</b> {item.region}
        </p>
        <p className="card_text">
          <b>Capital:</b> {item.capital}
        </p>
      </div>
    </div>
  );
};

export default CountrieItem;
