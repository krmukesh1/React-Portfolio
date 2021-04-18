import React from "react";
import { NavLink } from "react-router-dom";

const Common = (props) => {
  return (
    <>
      {/* header  */}
      <header className="hero">
        <img
          className="hero-image"
          src={process.env.PUBLIC_URL + "/images/hero.svg"}
        />
        <h1 className="hero-heading">
          Hey! I am <span className="heading-inverted"> {props.name}</span>
        </h1>
      </header>
      {/* offwhite section  */}
      <section className="section ow">
        <div className="container container-center">
          <h1>{props.techtitle}</h1>
          <p>{props.techcontent}</p>
        </div>
      </section>
      {/* white section  */}
      <section className="section">
        <div className="container container-center">
          <h1>Projects</h1>
          <p>
            I like to showcase my work and thus, you can see my projects hosted
            online
          </p>
          <NavLink className="link link-primary" to="/projects">
            See Projects
          </NavLink>
        </div>
      </section>
      {/* offwhite section  */}
      <section className="section ow">
        <div className="container container-center">
          <h1>Blogs</h1>
          <p>
            I am also working on some technical and non technical blogs. I like
            to documnet my joourney of learning
          </p>
          <NavLink className="link link-secondary" to="/blogs">
            Read Blogs
          </NavLink>
        </div>
      </section>
    </>
  );
};
export default Common;
