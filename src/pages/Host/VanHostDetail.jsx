import React, { useEffect, useState } from "react";
import "../../styles/VanHostDetail.css";
import { BsArrowLeft } from "react-icons/bs";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";

const VanHostDetail = () => {
  const params = useParams();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "161616",
  };

  return (
    <div>
      <Link
        className="back-button"
        //  making it relative to the path, not to the route:
        to={".."}
        relative="path"
      >
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
      <nav className="host-van-detail-nav">
        
          <div className="van-host-list">
            <NavLink
              to={"."}
              end
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="link-details"
            >
              Details
            </NavLink>
            <NavLink
              to={"pricing"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="link-pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              to={"photos"}
              style={({ isActive }) => (isActive ? activeStyle : null)}
              className="link-photos"
            >
              Photos
            </NavLink>
          </div>
       
      </nav>
      <Outlet context={{ van }} />
    </div>
  );
};
export default VanHostDetail;
