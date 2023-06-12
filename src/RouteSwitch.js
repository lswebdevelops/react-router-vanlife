import App from "./App";
import "./App.css";
import About from "./pages/About";
import Vans from "./pages/Vans";
import Footer from "./components/Footer";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import VanDetail from "./pages/VanDetail";


const RouteSwitch = () => {
  



  return (
    <BrowserRouter>
     <div className="container">
     <header >
        <nav>
          <ul>
            <li>
              <Link className="link-vanlife" to={"/"}>
                #VANLIFE
              </Link>
            </li>

            <div>
              <li>
                <Link className="link-about" to={"/about"}>
                  About
                </Link>
              </li>
              <li>
                <Link className="link-vans" to={"/vans"}>
                  Vans
                </Link>
              </li>
            </div>
          </ul>
        </nav>
        </header>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          {/* adding nested routes> params */}
          <Route path="/vans/:id" element={<VanDetail />} />

        </Routes>
     
     </div>
        <Footer />
    </BrowserRouter>
  );
};
export default RouteSwitch;
