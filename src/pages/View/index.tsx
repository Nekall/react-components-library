// Modules
import React from "react";
import { Link } from "react-router-dom";

// Components
import Navbar from "../../components/Navbar";

// Assets
import github from "../../assets/images/github.svg";

// Style
import "./style.css";

const View = () => {
  let links = [
    { name: "name1", link: "/link1", openNewTab: false },
    { name: "name2", link: "/link2", openNewTab: false },
    { name: "name3", link: "/link3", openNewTab: false },
    { name: "name4", link: "/link4", openNewTab: true },
    { name: "name5", link: "/link5" },
  ];

  return (
    <div className="view">
      <Link to="/" className="home_link">
        ← Back
      </Link>
      <Navbar altLogo={"Logo github"} logo={github} links={links} />
    </div>
  );
};

export default View;
