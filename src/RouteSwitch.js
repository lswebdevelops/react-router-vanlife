import Home from "./App";
import "./App.css";
import About from "./pages/About";
import Vans from "./pages/Vans/Vans";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VanDetail from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import NotFound from "./components/NotFound";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />

            <Route path="vans">
            <Route index element={<Vans />} />
            <Route path=":id" element={<VanDetail />} />
            </Route>

            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
export default RouteSwitch;
