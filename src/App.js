import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Meeting from "./pages/Meeting";
import Barrage from "./pages/Barrage";

export default class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path={`/`} exact component={Meeting} />
          <Route path={`/barrage`} component={Barrage} />
        </Switch>
      </Router>
    );
  }
}
