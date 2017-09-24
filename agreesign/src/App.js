import React, { Component } from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Splash from "./splash";
import Num from "./number.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/begin" component={Num} />
            <Route path="/" component={Splash} />
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
