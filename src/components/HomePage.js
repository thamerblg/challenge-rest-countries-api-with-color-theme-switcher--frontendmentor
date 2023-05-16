import React, { useEffect, useState } from "react";
import Search from "./Search";
import CountriesList from "./CountriesList";
import { countries } from "../data";

const HomePage = () => {
  const [listOfCountries, setListOfCountries] = useState(countries);
  const [titleSearch, setTitleSearch] = useState("");
  const [regionSearch, setRegionSearch] = useState("");

  const filterCountrieByTitle = () => {
    setListOfCountries(
      countries.filter((countrie) =>
        countrie.name.toLowerCase().startsWith(titleSearch.toLowerCase().trim())
      )
    );
  };

  const filterCountrieByRegion = () => {
    setListOfCountries(
      regionSearch === ""
        ? countries
        : countries.filter((countrie) => countrie.region === regionSearch)
    );
  };

  useEffect(() => {
    filterCountrieByTitle();
    // eslint-disable-next-line
  }, [titleSearch]);

  useEffect(() => {
    filterCountrieByRegion();
    // eslint-disable-next-line
  }, [regionSearch]);

  return (
    <section className="home">
      <Search
        setTitleSearch={setTitleSearch}
        setRegionSearch={setRegionSearch}
      />
      <CountriesList listOfCountries={listOfCountries} />
    </section>
  );
};

export default HomePage;
