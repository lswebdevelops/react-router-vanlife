import React from "react";
import { useOutletContext } from "react-router-dom";

const VanHostInfo = () => {
  const { currentVan } = useOutletContext();

  return (
    <section>
      <p className="para-host-van-details">Name: <span>{currentVan.type}</span></p>
      <p className="para-host-van-details">Category: <span>{currentVan.type}</span></p>
      <p className="para-host-van-details">Description: <span></span>{currentVan.description}</p>
      <p className="para-host-van-details">Visibility:<span>Public</span></p>
    </section>
  );
};

export default VanHostInfo;
