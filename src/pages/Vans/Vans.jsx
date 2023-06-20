import "../../styles/Vans.css";
import React, { useState, useEffect } from "react";
import "../../server";
import { NavLink, Link, useSearchParams } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  

  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const displayElements = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayElements
    // .slice(0, 3) // Take only the first three vans
    .map((van) => (
      <Link to={`/vans/${van.id}`} key={van.id} className="vans-image">
        <img src={van.imageUrl} alt="van" />
        <div className="van-details">
          <h3 className="vans-h3">{van.name}</h3>
          <p className="vans-paragrath">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <div
          className={`div-type ${
            van.type === "simple"
              ? "green"
              : van.type === "rugged"
              ? "orange"
              : "gray"
          }`}
        >
          {van.type}
        </div>
      </Link>
    ));

  return (
    <div className="Vans">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button     
        onClick={()=> {setSearchParams({type: "simple"})}}
        className={"filter-buttons"}   to="?type=simple">Simple</button>
        <button    
        onClick={()=> {setSearchParams({type: "rugged"})}}
        className={"filter-buttons"}   to="?type=rugged">Rugged</button>
        <button     
        onClick={()=> {setSearchParams({type: "luxury"})}}
        className={"filter-buttons"}   to="?type=luxury">Luxury</button>
        <button    
        onClick={()=> {setSearchParams({})}}
        className={"filter-buttons"}   to=".">Clear</button>
      </div>
      <div className="Vans">
      {vanElements}
      </div>
    </div>
  );
}

export default Vans;
