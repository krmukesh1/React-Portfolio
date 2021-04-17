import React from "react";

const Projects = () => {
  return (
    <>
      {/* header  */}
      <header class="hero">
        <h1 class="hero-heading">
          See my<span class="heading-inverted"> code</span>
        </h1>
      </header>
      {/* reversed */}
      <ul class="list-non-bullet">
        <li>
          <div class="container container-center">
            <h1>FOREX TRADING WEBSITE</h1>
            <small>January, 2021</small>
            <p>
              A Forex Market Website, This is my <strong>Freelancing</strong>{" "}
              Website
            </p>
            <a
              class="link link-primary"
              href="https://rquizs.netlify.app/"
              target="_blank"
            >
              Live Projects
            </a>
            <a class="link link-secondary" href="#">
              View Source
            </a>
          </div>
        </li>
        <li>
          <div class="container container-center">
            <h1>IT COMPANY WEBSITE</h1>
            <small>November, 2020</small>
            <p>
              This Webiste is Design for Ziasy Consulting Pvt Ltd, Where i am
              Working
            </p>
            <a
              class="link link-primary"
              href="https://ziasy-company.netlify.app/"
              target="_blank"
            >
              Live Projects
            </a>
            <a class="link link-secondary" href="#">
              View Source
            </a>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Projects;
