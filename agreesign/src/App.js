import React, { Component } from 'react';
import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import Splash from "./splash.jsx";
import Num from "./number.jsx";
import Contract from "./contracts.jsx";
import Conclude from "./conclude.jsx";
import Menu from "./venue_menu.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Switch>
            <Route path="/menu" component={Menu} />
            <Route path="/conclude" component={Conclude} />
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
