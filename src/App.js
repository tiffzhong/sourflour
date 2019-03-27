import React, { Component } from "react";
import "./reset.scss";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import routes from "./routes";
import Footer from "./Components/Footer/Footer";
class App extends Component {
  render() {
    return <div className="App">{routes}</div>;
  }
}

export default App;
