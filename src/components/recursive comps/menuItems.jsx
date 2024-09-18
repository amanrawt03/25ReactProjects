import React from "react";
import Recursion from "./Recursion";
const MenuItems = ({ item, display, toggleExp }) => {
  return (
    <li>
      <span>{item.label}</span>
      {item.children && (
        <>
          <button onClick={()=>toggleExp(item.label)}>{display?'-':'+'}</button>
          {display && <Recursion menuList={item.children} />}
        </>
      )}
    </li>
  );
};

export default MenuItems;
