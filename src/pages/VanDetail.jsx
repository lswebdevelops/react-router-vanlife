import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/VanDetails.css";

const VanDetail = () => {
  const [vans, setVans] = useState([]);
  // Access the van ID from the URL parameter

  const { id } = useParams();

  useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  // Filter the vans array to get the specific van with the matching ID
  const van = vans.find((van) => van.id === id);
  if (!van) {
    return <div>Loading...</div>; // Add loading state if the van is not found yet
  }

  return (
    <div className="VanDetails">
      <Link className="back-button" to={"/vans"}>
        Back to all vans
      </Link>
      <div className="vansDetails-image">
        <img src={van.imageUrl} alt="van" />
        <div className="vanDetails-details">
        <div
            className={`div-typeDetails ${
              van.type === "simple"
                ? "greenDetails"
                : van.type === "rugged"
                ? "orangeDetails"
                : "grayDetails"
            }`}
          >
            {van.type}
          </div>
          <h3 className="vansDetails-h3">{van.name}</h3>
          <p className="vansDetails-paragrath">
            ${van.price}
            <span>/day</span>
          </p>
         
          <div>{van.description}</div>
        </div>
      </div>
    </div>
  );
};

export default VanDetail;
