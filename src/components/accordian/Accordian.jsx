import React from "react";
import data from "./data";
import { useState } from "react";

const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [selectOP, setselectOP] = useState("SingleSelect");
  const [showAns, setShowAns] = useState([]);
  function handleOnMultiSelect(quesId) {
    setShowAns([...showAns, quesId]);
  }
  function handleOnSingleSelect(quesId) {
    setSelected(quesId === selected? null: quesId);
  }
  function handleOnSelect(){
    setselectOP(selectOP === "SingleSelect"?"MultiSelect":"SingleSelect");
  }
  return (
    <div>
      <h1>1. ACCORDIAN</h1>
      {selectOP === "SingleSelect" ? (
        <div>
          <button onClick={handleOnSelect}>Enable {selectOP === "SingleSelect"?"MultiSelect":"SingleSelect"}</button>
          {data.map((ques) => (
            <div key={ques.id} onClick={() => handleOnSingleSelect(ques.id)}>
              {ques.question}
              {selected === ques.id ? <div>{ques.answer}</div> : null}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleOnSelect}>Enable {selectOP === "SingleSelect"?"MultiSelect":"SingleSelect"}</button>
          {data.map((ques) => (
            <div key={ques.id} onClick={() => handleOnMultiSelect(ques.id)}>
              {ques.question}
              {showAns.includes(ques.id) ? <div>{ques.answer}</div> : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default Accordian;
