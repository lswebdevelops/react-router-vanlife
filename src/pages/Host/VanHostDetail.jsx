import React from "react";
import "../../styles/VanHostDetail.css";
import { BsArrowLeft } from "react-icons/bs";
import {
  Link,
  Outlet,
  NavLink,
  useLoaderData,
} from "react-router-dom";
import { getHostVans } from "../../api";

export function loader({ params }) {
  return getHostVans(params.id);
}

const VanHostDetail = () => {
 
  const currentVan = useLoaderData();
 
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "161616",
  };

  return (
    <div className="above-all-host-container">
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

      <div className="vansDetails-host-image">
        <img src={currentVan.imageUrl} alt="a van" />
        <div className="div-typeDestails-host-container">
          <div
            className={`div-typeDetails-host ${
              currentVan.type === "simple"
                ? "greenDetails"
                : currentVan.type === "rugged"
                ? "orangeDetails"
                : "grayDetails"
            }`}
          >
            {currentVan.type}
          </div>
          <h3 className="vansDetails-h3-host">{currentVan.name}</h3>
          <p className="van-price-host">
            <span>${currentVan.price}</span>/day
          </p>
        </div>
      </div>

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
      <Outlet context={{ currentVan }} />
    </div>
  );
};
export default VanHostDetail;
