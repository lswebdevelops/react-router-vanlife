import Home from "./App";
import "./App.css";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import VanHostDetail from "./pages/Host/VanHostDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import NotFound from "./components/NotFound";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import VansHost from "./pages/Host/VansHost";

import VanHostInfo from "./pages/Host/VanHostInfo";
import VanHostPhotos from "./pages/Host/VanHostPhotos";
import VanHostPricing from "./pages/Host/VanHostPricing";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans" element={<Vans />} />
            <Route path="vans/:id" element={<VanDetail />} />

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<VansHost />} />
              <Route path="vans/:id" element={<VanHostDetail />}>
                
                <Route index element={<VanHostInfo />} />
                <Route path="photos" element={<VanHostPhotos />} />
                <Route path="pricing" element={<VanHostPricing />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default RouteSwitch;
