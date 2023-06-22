import "../../styles/Vans.css";
import React, { useState } from "react";
import "../../server";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";

export function loader() {
 
  return getVans();
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [error, setError] = useState(null);
  const vans = useLoaderData();

  const typeFilter = searchParams.get("type");

  const displayElements = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  const vanElements = displayElements
    // .slice(0, 3) // Take only the first three vans
    .map((van) => (
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
        key={van.id}
        className="vans-image"
      >
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

  if (error) {
    return <h1> There was an error: {error.message}</h1>;
  }
  return (
    <div className="Vans">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => {
            setSearchParams({ type: "simple" });
          }}
          className={typeFilter === "simple" ? "green" : "filter-buttons"}
        >
          Simple
        </button>
        <button
          onClick={() => {
            setSearchParams({ type: "rugged" });
          }}
          className={typeFilter === "rugged" ? "orange" : "filter-buttons"}
        >
          Rugged
        </button>
        <button
          onClick={() => {
            setSearchParams({ type: "luxury" });
          }}
          className={typeFilter === "luxury" ? "gray" : "filter-buttons"}
        >
          Luxury
        </button>
        {typeFilter ? (
          <button
            onClick={() => {
              setSearchParams({});
            }}
            className={"filter-buttons"}
          >
            Clear
          </button>
        ) : null}
      </div>
      <div className="Vans">{vanElements}</div>
    </div>
  );
}

export default Vans;
