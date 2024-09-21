import React, { useState } from "react";
import "./github.css";

const GithubProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const[profile, setProfile] = useState(null);
  const handleOnChange = (e) => {
    setUsername(e.target.value);
  };
  async function fetchProfile() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const data = await res.json();
      setUsername("");
      if(data){
        setProfile(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }
  if(loading){
    return <div>Loading...</div>
  }
  return (
    <div className="main">
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Github Username"
          value={username}
          onChange={(e) => handleOnChange(e)}
        />
        <button onClick={fetchProfile}>Search</button>
      </div>
      {profile && <div className="profile">
        <img src={profile.avatar_url} />
        <h3><a href={profile.html_url}>{profile.name}</a></h3>
        <h3>User Joined On: {new Date(profile.created_at).toLocaleDateString()}</h3>
        <h3>Public Repos: {profile.public_repos}</h3>
        <h3>Followers: {profile.followers}</h3>
        <h3>Following: {profile.following}</h3>
      </div>}
    </div>
  );
};

export default GithubProfileFinder;
