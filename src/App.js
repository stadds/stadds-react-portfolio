import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import logo from "./assets/img/logo/rocket.svg"
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <NavBar logo={logo}></NavBar>
        <Switch>
          <Route exact path="/" component={About}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
