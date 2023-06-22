import Home from "./App";
import "./App.css";
import About from "./pages/About";
import Vans, {loader as vansPageLoader } from "./pages/Vans/Vans";
import VanHostDetail from "./pages/Host/VanHostDetail";
import Error from "./components/Error";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
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

const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />

      <Route 
        path="vans" 
        element={<Vans />}
        errorElement={<Error />} 
        loader={vansPageLoader}/>
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
      <Route path="*" element={<NotFound />} />
    </Route>

  )
);

const RouteSwitch = () => {
  return <RouterProvider router={router} />;
};
export default RouteSwitch;
