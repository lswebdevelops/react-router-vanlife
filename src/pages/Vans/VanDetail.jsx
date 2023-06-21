import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import "../../styles/VanDetails.css";

import { BsArrowLeft } from "react-icons/bs";

function VanDetail() {
  const params = useParams();
  const location = useLocation();
  

  const [van, setVan] = React.useState(null);

  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const search = location.state?.search || ""
  const type = location.state?.type || "all"

  return (
    <div className="VanDetails">
      <Link 
        className="back-button" 
        to={`..${search}`}
        relative="path">
        {/*  adding a space between the arrow and the strings: */}
        <BsArrowLeft />
        <span>&nbsp;</span>

        {/* if  */}
        Back to {type} vans
      </Link>

      {van ? (
        <div className="vansDetails-image">
          <img src={van.imageUrl} alt="a van" />
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
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p className="vansDetails-paragrath">{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
export default VanDetail;
