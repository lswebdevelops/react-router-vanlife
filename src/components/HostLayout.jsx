import React from "react";
import { Outlet, Link } from "react-router-dom";


const HostLayout = () => {
    return(
        <>
         
          <ul className="dashboard-list">
        <li>
          <Link className="link-dashboard" to={"/host"}>
            Dashboard
          </Link>
        </li>

        <li>
          <Link className="link-income" to={"/host/income"}>
            Income
          </Link>
        </li>
        
        <li>
          <Link className="link-reviews" to={"/host/reviews"}>
            Reviews
          </Link>
        </li>
      </ul>
    
        <Outlet />
        </>
    )
}

export default HostLayout;