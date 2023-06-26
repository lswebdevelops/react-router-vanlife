import React from "react";
import { NavLink, Link } from "react-router-dom";
import { HiMiniUserCircle } from "react-icons/hi2";

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
          <Link to="login" className="login-link">
                    <HiMiniUserCircle />
                </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
