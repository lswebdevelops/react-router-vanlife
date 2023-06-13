import App from "./App";
import "./App.css";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import NotFound from "./components/NotFound"

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />


            <Route path="/host" element={<Dashboard />} >
            <Route path="/host/income" element={<Income />} />
            <Route path="/host/reviews" element={<Reviews />} />
            </Route>
              
          
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteSwitch;
