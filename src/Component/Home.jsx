import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/hero.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common name="Mukesh Kumar" imgsrc={web} />
    </>
  );
};
export default Home;
