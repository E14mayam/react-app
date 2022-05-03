import React from "react";
import image from "./img/image.png";

const Content = () => (
  <div className="content offcanvas-header justify-content-center">
      <div className="content-text">
      <h1 className="h1">Explore a new way <br></br> of learning.</h1>
      <p>A new platform designed for you to learn <br></br> and easily recall that knowledge.</p>
      </div>
      <img src={image} alt="img" />
  </div>
);

export default Content;
