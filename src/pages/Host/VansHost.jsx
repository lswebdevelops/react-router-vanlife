import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "../../styles/VansHost.css";
import {getHostVans} from "../../api";

export function loader() {
  return  getHostVans();

}
const VansHost = () => {
  const vans = useLoaderData()

  const hostVansEls = vans
    .slice(0, 3) // Take only three vans
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
      {hostVansEls}
    </div>
  );
};

export default VansHost;
