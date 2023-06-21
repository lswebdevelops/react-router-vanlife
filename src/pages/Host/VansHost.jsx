import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/VansHost.css";

const VansHost = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans
    .slice(1, 4) // Take only three vans
    .map((van) => (
      <Link to={van.id} key={van.id} className="vans-host-image">
        <img src={van.imageUrl} alt="vans" />

        <div>
          <h3 className="vans-host-h3">{van.name}</h3>
          <p className="vans-host-paragrath">
            ${van.price}
            <span>/day</span>
          </p>
        </div>
      </Link>
    ));

  return (
    <div>
      <h2>Vans from host</h2>
      {vanElements}
    </div>
  );
};

export default VansHost;
