import React, { Component } from "react";
import "./reset.scss";
import "./App.scss";
import NavBar from "./Components/NavBar/NavBar";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        {routes}
      </div>
    );
  }
}

export default App;
