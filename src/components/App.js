import style from './styles/App.module.scss';

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Main from './Main';
import ValidateName from './ValidateName';
import ValidateLanguage from './ValidateLanguage';

const App = () => {
  return (
    <Router>
      <div className={style.App}>
        <Link to="/" className={style.title}>
          <h1>Seven Senders - Widget App</h1>
        </Link>
        <div>
          <Route exact path="/" component={Main} />
          <Route exact path="/add-name" component={ValidateName} />
          <Route exact path="/add-language/:id" component={ValidateLanguage} />
        </div>
      </div>
    </Router>
  );
};

export default App;
