import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './Main';
import CreateWidget from './CreateWidget';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      widgets: [
        { name: 'Widget 1', language: 'English' },
        { name: 'Widget 2', language: 'Spanish' },
        { name: 'Widget 3', language: 'German' }
      ]
    };
  }

  componentDidMount() {}

  handleCreateWidget = (e, value) => {
    e.preventDefault();
    // console.log(e.target.value);
    // console.log(value);
    // this.setState({ widgets: { ...value } });
  };

  handleNameChange = e => {
    const name = e.target.value;
    // this.setState(() => (this.state.widgets{}))
    console.log(name);
  };

  handleLanguageChange = e => {
    const language = e.target.value;
    console.log(language);
  };

  render() {
    const { widgets } = this.state;

    return (
      <Router>
        <div className="App">
          <h1>Seven Senders - Widget App</h1>
          <div>
            <Route
              exact
              path="/"
              render={props => <Main {...props} widgets={widgets} />}
            />
            <Route
              exact
              path="/create-widget"
              render={props => (
                <CreateWidget
                  {...props}
                  handleCreateWidget={this.handleCreateWidget}
                  handleNameChange={this.handleNameChange}
                  handleLanguageChange={this.handleLanguageChange}
                />
              )}
            />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
