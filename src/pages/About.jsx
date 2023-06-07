import "../styles/About.css";
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About">
      <div className="about-image">
        <img src={require("../images/vanlife.png")} alt="man on a van" />
      </div>
      <h1 className="about-h1">
        Don't squeeze in a sedan when you could relax in a van.
      </h1>
      <p className="about-paragrath">
        Our mission is to enliven your road trip with the perfect travel van
        rental. Our vans are recertified before each trip to ensure your travel
        plans can go off without a hitch.
        <br />
        (Hitch costs extra)😉{" "}
      </p>
      <p className="about-paragrath">
        Our team is full of vanlife enthusiasts who know firsthand the magic of
        touring the world on 4 wheels.
      </p>
      <div className="about-div">
        <p className="about-para">
          Your destination is waiting.
          <br />
          Your van is ready.
        </p>

        <Link className="about-button" to={"/vans"}>Explore our vans</Link>
      </div>
    </div>
  );
}

export default About;
