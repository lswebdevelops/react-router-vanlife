import React, { useEffect, useState } from "react";
import "../../styles/VanHostDetail.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";


const VanHostDetail = () => {
    const params = useParams();
    const [van , setVan ] = useState([]);

    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then((res) => res.json())
        .then((data) => setVan(data.vans));
    }, [params.id]);

  return (
    <div className="container-van-host-detail">
         <Link className="back-button" to={"/host/vans"}>
            {/*  adding a space between the arrow and the strings: */}
        <BsArrowLeft />
        <span>&nbsp;</span>
        Back to your vans
        </Link>

        {van ? (
  <div className="vansDetails-host-image">
    <img src={van.imageUrl} alt="a van" />
    <div className="div-typeDestails-host-container">
      <div
        className={`div-typeDetails-host ${
          van.type === "simple"
            ? "greenDetails"
            : van.type === "rugged"
            ? "orangeDetails"
            : "grayDetails"
        }`}
      >
        {van.type}
      </div>
      <h3 className="vansDetails-h3-host">{van.name}</h3>
      <p className="van-price-host">
        <span>${van.price}</span>/day
      </p>
    </div>
  </div>
) : (
  <h2>Loading...</h2>
      )}
    </div>
    );
};
export default VanHostDetail;
