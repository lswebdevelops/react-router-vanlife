import React from "react";
import { useOutletContext } from "react-router-dom";


const VanHostPhotos = () => {
    const { van } = useOutletContext();

    return (
      <section className="para-host-van-image">
            <img src={van.imageUrl} alt="vans" />     
      </section>
    );
  };
export default VanHostPhotos;
