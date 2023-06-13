import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="App">
      <h1 className="home-h1">
        You got the travel plans, we got the travel vans.
      </h1>
      <p>Add adventure to your life by joining the #vanlife moviment.</p>
      <p>Rent the perfect van to make your perfect road trip.</p>
      <Link to={"/vans"} >
       <button className="home-button"> Find your van</button>
      </Link>
    </div>
  );
}

export default Home;
