// Modules
import React from "react";
import { Link } from "react-router-dom";

// Assets
import download from "../../assets/images/download.svg";

// Style
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Link to="/view" className="view_link">View page →</Link>
      <h1>Welcome in RCL</h1>
      <hr />
      <p>
        <span className="bold">R</span>eact-<span className="bold">C</span>
        omponents-<span className="bold">L</span>ibrary
      </p>
      <p>efficient 🚀 , smart 🧠 and customizable 🛠️ components</p>
      <hr />
      <h2>Download</h2>
      <div className="form">
        <fieldset>
          <legend>Choose your components:</legend>
          <div>
            <input type="checkbox" id="navbar" name="navbar" />
            <label htmlFor="navbar">Navbar</label>
          </div>
          <div>
            <input type="checkbox" id="banner" name="banner" />
            <label htmlFor="banner">Banner</label>
          </div>
          <div>
            <input type="checkbox" id="form" name="form" />
            <label htmlFor="form">Form</label>
          </div>
          <div>
            <input type="checkbox" id="carousel" name="carousel" />
            <label htmlFor="carousel">Carousel</label>
          </div>
          <div>
            <input type="checkbox" id="banner" name="banner" />
            <label htmlFor="banner">Banner</label>
          </div>
          {/*New components checkbox here...*/}
        </fieldset>
      </div>
      <button className="btn_download">
        <a href="empty.zip" download="empty.zip">
          Download{" "}
          <img
            className="download_logo"
            src={download}
            alt="Download logo"
          />
        </a>
      </button>
    </div>
  );
};

export default Home;
