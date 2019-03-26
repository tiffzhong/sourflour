import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import About from "./Components/About/About";
import Breads from "./Components/Breads/Breads";
import Locations from "./Components/Locations/Locations";
import Workshops from "./Components/Workshops/Workshops";
import Blog from "./Components/Blog/Blog";
import Contact from "./Components/Contact/Contact";
export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/breads" component={Breads} />
    <Route path="/locations" component={Locations} />
    <Route path="/workshops" component={Workshops} />
    <Route path="/blog" component={Blog} />
    <Route path="/contact" component={Contact} />
  </Switch>
);
