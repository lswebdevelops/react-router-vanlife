import React from "react";
import { useOutletContext } from "react-router-dom";


const VanHostPhotos = () => {
    const { currentVan } = useOutletContext();

    return (
      <section className="para-host-van-image">
            <img src={currentVan.imageUrl} alt="vans" />     
      </section>
    );
  };
export default VanHostPhotos;
