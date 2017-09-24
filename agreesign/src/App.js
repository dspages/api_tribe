import React, { Component } from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Splash from "./splash.jsx";
import Num from "./number.jsx";
import Contract from "./contracts.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/contract" component={Contract} />
            <Route path="/number" component={Num} />
            <Route path="/" component={Splash} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
