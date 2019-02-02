import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import IndexPage from "./pages/IndexPage";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <IndexPage />
        </div>
      </Router>
    );
  }
}

export default App;
