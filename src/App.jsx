import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Info from "./components/Info";
import About from "./components/pages/About";
import Week from "./components/Week";
import Hourly from "./components/Hourly";

import { Provider } from "./components/Context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Weather App" />
            <Switch>
              <Route exact path="/about" component={About} />
              <Route exact path="/" component={Info} />
              <Route exact path="/daily" component={Week} />
              <Route exact path="/hourly" component={Hourly} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
