import React from "react";
import { useOutletContext } from "react-router-dom";

const VanHostPricing = () => {
    const { van } = useOutletContext();

    return (
      <section>
        <p className="para-host-van-details">Name: <span>{van.name}</span></p>
        <p className="para-host-van-details">Price: <span>${van.price}/day</span></p>
        
      </section>
    );
  };
export default VanHostPricing;
