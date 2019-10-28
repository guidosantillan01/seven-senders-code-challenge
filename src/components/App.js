import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './Main';
import CreateWidget from './CreateWidget';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <h1>Widgets App</h1>
          <div>
            <Route exact path="/" component={Main} />
            <Route exact path="/create-widget" component={CreateWidget} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
