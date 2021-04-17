import React from "react";
import Card from "./Card";
import Prodata from "./Prodata";

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
          {Prodata.map((val, ind) => {
            return (
              <Card
                key={ind}
                title={val.title}
                date={val.date}
                content={val.content}
                link={val.link}
                primary_button={val.primary_button}
                secondary_button={val.secondary_button}
              />
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default Projects;
