import React from "react";
import "./styleTh.css";
import useLocalStorage from "./useLocalStorage";
const ThemeChanger = () => {
  const[theme, setTheme] = useLocalStorage("theme", "light")
  return (
    <div>
      <h1>Hello guys !! Welcome to theme changer...</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        consequuntur soluta molestias ipsum doloribus architecto non distinctio
        voluptate exercitationem quaerat, numquam quidem perferendis eveniet
        sint, velit dolores magnam! Assumenda.
      </p>
      <button>Change Theme </button>
    </div>
  );
};

export default ThemeChanger;
