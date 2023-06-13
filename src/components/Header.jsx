import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link className="link-vanlife" to={"/"}>
              #VANLIFE
            </Link>
          </li>

          <div>
            <li>
              <Link className="link-host" to={"/host"}>
                Host
              </Link>
            </li>
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
  );
};

export default Header;
