import "../styles/Vans.css";
import React, { useState, useEffect } from "react";
import "../server";

function Vans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => (
    <div key={van.id} className="vans-image">
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
    </div>
  ));

  return (
    <div className="Vans">
      <h1>Explore our van options</h1>
      {vanElements}
    </div>
  );
}

export default Vans;
