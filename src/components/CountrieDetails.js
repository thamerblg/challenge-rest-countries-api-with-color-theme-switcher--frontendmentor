import React from "react";
import { Link, useParams } from "react-router-dom";
import { countries } from "../data";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const CountrieDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/");
  };

  const handleClick = (br) => {
    console.log(countries.filter((ctr) => ctr.alpha3Code === br)[0].name);
  };

  return (
    <section className="details">
      <button onClick={handleSubmit}>
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </button>
      {countries
        .filter((countrie) => countrie.name === name)
        .map((el, index) => (
          <div className="infos" key={index}>
            <div className="image-flag">
              <img
                src={el.flags.png}
                className="card-img-top imgBg"
                alt={el.flags.png}
              />
            </div>
            <div className="items">
              <h2>{el.name}</h2>
              <div className="lists">
                <ul className="first-list">
                  <li>
                    <b>Native Name:</b> {el.nativeName}
                  </li>
                  <li>
                    <b>Population:</b> {el.population}
                  </li>
                  <li>
                    <b>Region:</b> {el.region}
                  </li>
                  <li>
                    <b>Sub Region:</b> {el.subregion}
                  </li>
                  <li>
                    <b>Capital:</b> {el.capital}
                  </li>
                </ul>
                <ul className="second-list">
                  <li>
                    <b>Top Level Domain:</b> {el.topLevelDomain}
                  </li>
                  <li>
                    <b>Currencies:</b> {el.currencies && el.currencies[0].name}
                  </li>
                  <li>
                    <b>Languages:</b>{" "}
                    {el.languages.map((lg, index) => (
                      <span key={index}>{lg.name}</span>
                    ))}
                  </li>
                </ul>
              </div>
              <div className="borders">
                <span>
                  <b>Borders Countries:</b>
                </span>
                <ul className="borders-items">
                  {el.borders &&
                    el.borders.map((br, index) => (
                      <li key={index} onClick={() => handleClick(br)}>
                        <Link
                          to={`/countrieDetails/${
                            countries.filter((ctr) => ctr.alpha3Code === br)[0]
                              .name
                          }`}
                        >
                          {
                            countries.filter((ctr) => ctr.alpha3Code === br)[0]
                              .name
                          }
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default CountrieDetails;
