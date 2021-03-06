import React from "react";
import Home from "./pages/home";
import Works from "./pages/works";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Footer from "./footer/footer";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./header/navbar";
function App() {
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/how-it-works" component={Works} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
