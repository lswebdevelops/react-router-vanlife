import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import './App.css'
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div  className="container">
      <nav>
        <ul>
          <li>
            <Link className="link-vanlife" to={"/"}>#VANLIFE</Link>
          </li>

         <div>
         <li>
            <Link className="link-about" to={"/about"}>About</Link>
          </li>
          <li>
            <Link className="link-vans" to={"/vans"}>Vans</Link>
          </li>
         </div>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />

      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
};
export default RouteSwitch;
