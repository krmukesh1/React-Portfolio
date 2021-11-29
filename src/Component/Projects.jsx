import React from "react";
import COMPANY_DATA from "../data/Company";
import PROJECT_DATA from "../data";
import Card from "./Card";

const Projects = () => {
  return (
    <>
      {/* header  */}
      <header class="hero">
        <h1 class="hero-heading">
          See my<span class="heading-inverted"> code</span>
        </h1>
      </header>
      {/*Company Data reversed */}
      <ul class="list-non-bullet">
        <li>
          {COMPANY_DATA.map((val, ind) => {
            return (
              <Card
                key={ind}
                title={val.title}
                date={val.date}
                content={val.content}
                plink={val.plink}
                slink={val.slink}
                primary_button={val.primary_button}
                secondary_button={val.secondary_button}
              />
            );
          })}
        </li>
      </ul>
      {/*Neog Data reversed */}
      {/* <ul class="list-non-bullet">
        <li>
          {PROJECT_DATA.map((val, ind) => {
            return (
              <Card
                key={ind}
                title={val.title}
                date={val.date}
                content={val.content}
                plink={val.plink}
                slink={val.slink}
                primary_button={val.primary_button}
                secondary_button={val.secondary_button}
              />
            );
          })}
        </li>
      </ul> */}
    </>
  );
};

export default Projects;
