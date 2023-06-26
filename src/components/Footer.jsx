
import React from "react";
import { FaGithub } from "react-icons/fa";

function Footer(){
    return(
        <footer>
         &#169; LS-WEB Development{"   "}
          <a href="https://github.com/lswebdevelops" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
          </a>
        </footer>
    )
}
export default Footer;