// Modules
import React from "react";

// Components
import Navbar from "../../components/Navbar";

// Assets
import github from "../../assets/images/github.svg";

// Style
import "./style.css";

const Home = () => {
  let links = [
    { name: "name1", link: "/link1", openNewTab: false },
    { name: "name2", link: "/link2", openNewTab: false },
    { name: "name3", link: "/link3", openNewTab: false },
    { name: "name4", link: "/link4", openNewTab: true },
    { name: "name5", link: "/link5" },
  ];

  return (
    <div className="home">
      <Navbar altLogo={"Logo github"} logo={github} links={links}/>
      <h1>Welcome in RCL</h1>
      <hr/>
      <p>
        <span className="bold">R</span>eact-<span className="bold">C</span>
        omponents-<span className="bold">L</span>ibrary
      </p>
      <p>efficient 🚀 , smart 🧠 and customizable 🛠️ components</p>
    </div>
  );
}

export default Home;
