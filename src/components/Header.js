import React from "react";
import moonLightMode from "../media/moon.svg";
import moonDarkMode from "../media/moon-outline.svg";

const Header = ({ toggleTheme, theme }) => {
  return (
    <header className="header">
      <h1>Where in the world?</h1>
      <button onClick={toggleTheme}>
        <img
          src={theme === "light" ? moonDarkMode : moonLightMode}
          alt="moon icn"
        />
        Dark Mode
      </button>
    </header>
  );
};

export default Header;
