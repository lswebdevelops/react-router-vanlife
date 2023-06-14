import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link className="link-vanlife " to={"/"}>
          #VANLIFE
        </Link>
        <div>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to={"/host"}
          >
            Host
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "link-active" : null)}
            to={"/vans"}
          > 
            Vans
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
