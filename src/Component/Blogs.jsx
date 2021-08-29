import React from "react";

const Blogs = () => {
  return (
    <>
      <header className="hero blog">
        <h1 className="hero-heading">
          My<span className="heading-inverted"> Blogs</span>
        </h1>
        <li className="list-item-inline">
          <h1>Our Career Journey </h1>
          <p>
            Everything about our Career Journey as Professional
            <a
              className="link"
              href="https://careertech51.blogspot.com/"
              target="_blank"
            >
              Read more...
            </a>
          </p>
        </li>
        <li className="list-item-inline">
          <h1>HTML Syntax </h1>
          <p>
            HTML is not a programming language, but can still be considered the
            most basic building block of the
            <a
              className="link"
              href="https://careertech51.blogspot.com/"
              target="_blank"
            >
              Read more...
            </a>
          </p>
        </li>
      </header>
    </>
  );
};
export default Blogs;
