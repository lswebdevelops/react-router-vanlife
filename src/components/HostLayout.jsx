import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const HostLayout = () => {
  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "161616",
  };
  return (
    <>
      <div className="dashboard-list">
        <NavLink
          to={"/host"}
          end
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="link-dashboard"
        >
          Dashboard
        </NavLink>
        <NavLink
          to={"/host/income"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="link-income"
        >
          Income
        </NavLink>
        <NavLink
          to={"/host/vans"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="link-vanshost"
        >
          Vans
        </NavLink>
        <NavLink
          to={"/host/reviews"}
          style={({ isActive }) => (isActive ? activeStyle : null)}
          className="link-reviews"
        >
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </>
  );
};

export default HostLayout;
