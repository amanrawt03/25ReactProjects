import { useState } from "react";
import Tab from "./Tab";
import './dyna.css'
const DynamicTabs = () => {
  const[openTab, setOpenTab] = useState(null);
  const Tabs = [
    { id: 0, label: "tab1", content: "This is tab1" },
    { id: 1, label: "tab2", content: "This is tab2" },
    { id: 2, label: "tab3", content: "This is tab3" }
  ];
  return (
    <div className="main">
      <div className="tab-container">
      {Tabs.map((tab) => {
        return <Tab key={tab.id} tab = {tab} openTab={openTab} setOpenTab={setOpenTab}/>;
      })}
    </div>
    </div>
    
  );
};
export default DynamicTabs;
