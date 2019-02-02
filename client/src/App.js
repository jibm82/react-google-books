import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import IndexPage from "./pages/IndexPage";
import SavedPage from "./pages/SavedPage";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <>
          <Nav />
          <Switch>
            <Route exact path="/" component={IndexPage} />
            <Route exact path="/saved" component={SavedPage} />
          </Switch>
        </>
      </Router>
    );
  }
}

export default App;
