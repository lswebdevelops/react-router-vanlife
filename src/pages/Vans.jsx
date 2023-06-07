import "../styles/Vans.css";

function Vans() {
  return (
    <div className="Vans">
      <div className="vans-image">
        <img src={require("../images/van_trip.png")} alt="woman on a van" />
      </div>
      <h1 className="vans-h1">
      Why settle for a cramped sedan when you can enjoy the comfort of a spacious van? 
      </h1>
      <p className="vans-paragrath">
      Our goal is to enhance your road trip experience by providing the ideal travel van rental. Each van is meticulously inspected prior to every trip to guarantee smooth sailing throughout your travel plans.
        <br />
        (Note: Additional charges apply for hitch installations) 😉
      </p>
      <p className="vans-paragrath">
      Our team consists of passionate vanlife enthusiasts who have personally experienced the wonders of exploring the world on four wheels.
      </p>
      <div className="vans-div">
        <p className="vans-para">
          Your destination is waiting.
          <br />
          Your van is ready.
        </p>
        
      </div>
    </div>
  );
}

export default Vans;

