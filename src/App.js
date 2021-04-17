import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Contact from "./Component/Contact";
import About from "./Component/About";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

export const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
