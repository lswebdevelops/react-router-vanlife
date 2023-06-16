import React from "react";
import { useOutletContext } from "react-router-dom";

const VanHostInfo = () => {
  const { van } = useOutletContext();

  return (
    <section>
      <p className="para-host-van-details">Name: <span>{van.name}</span></p>
      <p className="para-host-van-details">Category: <span>{van.type}</span></p>
      <p className="para-host-van-details">Description: <span></span>{van.description}</p>
      <p className="para-host-van-details">Visibility:<span>Public</span></p>
    </section>
  );
};

export default VanHostInfo;
