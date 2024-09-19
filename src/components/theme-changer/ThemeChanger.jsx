import React from "react";
import "./theme.css";
import useLocalStorage from "./useLocalStorage";
const ThemeChanger = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div className={`container ${theme === "light"? "light":"dark"}`}>
      <h1>Hello guys !! Welcome to theme changer...</h1>
      <div className="text-box"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        consequuntur soluta molestias ipsum doloribus architecto non distinctio
        voluptate exercitationem quaerat, numquam quidem perferendis eveniet
        sint, velit dolores magnam! Assumenda.
      </p></div>
      <button onClick={handleToggle}>Change Theme </button>
    </div>
  );
};

export default ThemeChanger;
