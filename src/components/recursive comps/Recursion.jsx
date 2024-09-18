import { useState } from "react";
import MenuItems from "./menuItems";
import "./style.css";
const Recursion = ({ menuList }) => {
  const [expanded, setExpanded] = useState([]);
  const handleToggle = (label) => {
    setExpanded((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="sidebar">
      {menuList.map((item, index) => (
        <ul key={index}>
          <MenuItems
            item={item}
            display={expanded.includes(item.label)}
            toggleExp={handleToggle}
          />
        </ul>
      ))}
    </div>
  );
};

export default Recursion;
