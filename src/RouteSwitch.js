import Home from "./App";
import "./App.css";
import About from "./pages/About";
import Vans, {loader as vansPageLoader } from "./pages/Vans/Vans";
import VanHostDetail, {loader as hostVanDetailLoader} from "./pages/Host/VanHostDetail";
import Error from "./components/Error";
import Login from "./pages/Login";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import VanDetail, {loader as VanDetailLoader} from "./pages/Vans/VanDetail";
import Layout from "./components/Layout";
import Income from "./pages/Host/Income";
import Reviews from "./pages/Host/Reviews";
import NotFound from "./components/NotFound";
import HostLayout from "./components/HostLayout";
import Dashboard from "./pages/Host/Dashboard";
import VansHost, {loader as hostVansLoader} from "./pages/Host/VansHost";
import VanHostInfo from "./pages/Host/VanHostInfo";
import VanHostPhotos from "./pages/Host/VanHostPhotos";
import VanHostPricing from "./pages/Host/VanHostPricing";


const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route 
        path="login"
        element={<Login />} 
        />
      <Route 
        path="vans" 
        element={<Vans />}
        errorElement={<Error />} 
        loader={vansPageLoader}/>
      <Route 
        path="vans/:id" 
        element={<VanDetail />}
        loader={VanDetailLoader} />

      <Route path="host" element={<HostLayout />}>

        <Route 
        index 
        element={<Dashboard />}
        loader={async() => {
          return null
        }}
        />
        <Route 
        path="income" 
        element={<Income />}
        loader={async() => {
          return null
        }}
        />
        <Route 
        path="reviews" 
        element={<Reviews />}
        loader={async() => {
          return null
        }}
        />
        <Route 
        path="vans" 
        element={<VansHost />}
        loader={hostVansLoader}
        />
        <Route 
        path="vans/:id" 
        element={<VanHostDetail />}
        loader={hostVanDetailLoader}
        >
          <Route 
          index 
          element={<VanHostInfo />}
          loader={async() => {
            return null
          }}
          />
          <Route 
          path="pricing" 
          element={<VanHostPricing />}
          loader={async() => {
            return null
          }}
          />
          <Route 
          path="photos" 
          element={<VanHostPhotos />}
          loader={async() => {
            return null
          }}
          />

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
