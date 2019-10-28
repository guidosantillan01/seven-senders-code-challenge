import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './Main';
import CreateWidget from './CreateWidget';

import style from './App.module.scss';

const App = () => {
  return (
    <Router>
      <div className={style.App}>
        <Link to="/" className={style.title}>
          <h1>Seven Senders - Widget App</h1>
        </Link>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/create-widget" component={CreateWidget} />
        </div>
      </div>
    </Router>
  );
};

export default App;
