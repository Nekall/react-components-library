// Modules
import React from "react";
import { NavLink } from "react-router-dom";

// Style
import "./style.css";

interface NavProps {
  logo: any,
  altLogo: string,
  classLogo?: any,
  links: any,
}

const Navbar = ({
  logo,
  altLogo,
  classLogo,
  links,
}: NavProps) => {
  /*
  >logo
    size
    class
  */

  /*
  >links
    link router & link extern
    button
    pouvoir l'open dans un onglet
    class
  */

  /*
  >effects
    dropdown
  */

  return (
    <>
      <div className="navbar">
        <NavLink to={"/"}>
          <img className={classLogo? `logo ${classLogo}` : "logo"} src={logo} alt={altLogo} />
        </NavLink>
        <div className="links">
          {links &&
            links.map((link: any) => (
              <NavLink
                className="link"
                key={Math.random()}
                to={link.link}
                target={link.openNewTab? "_blank": ""}
                rel={link.openNewTab? "noopener noreferrer" : ""}
              >
                {link.name}
              </NavLink>
            ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Navbar;
