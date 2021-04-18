import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Component/Home";
import Projects from "./Component/Projects";
import Blogs from "./Component/Blogs";
import Contact from "./Component/Contact";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";

export const App = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blogs" component={Blogs} />
        <Redirect to="/" />
      </Switch>

      <Footer />
    </Router>
  );
};

export default App;
