import React, { useEffect, useState } from "react";
import SuggestionList from "./SuggestionList";
const NameSuggestions = () => {
  const [users, setUsers] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [name, setName] = useState("");
  const handleOnChange = (e) => {
    let query = e.target.value; 
    setName(query);
    if(query.length > 1){
      setSuggestions(()=>users.filter((elem)=>elem.firstName.toLowerCase().substring(0, query.length)=== query.toLowerCase()))
    }else setSuggestions([]);
  };

  const  handleOnClick = (fname)=>{
    console.log(fname)
    setName(fname)
    setSuggestions([])
  }
  async function fetchNames() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchNames();
  }, []);
  console.log(name, suggestions);
  return (
    <div>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={handleOnChange}
      />
      {suggestions.length>0?
      suggestions.map((item)=>{
        return <ul><SuggestionList item = {item} handleOnClick = {handleOnClick}/></ul>}
      ):null}
    </div>
  );
};

export default NameSuggestions;
