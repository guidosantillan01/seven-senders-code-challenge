import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWidget } from '../actions';

class CreateWidget extends Component {
  handleCreateWidget = e => {
    e.preventDefault();
    const widget = {
      name: e.target['name'].value,
      language: e.target['language'].value
    };
    this.props.dispatch(addWidget(widget));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateWidget}>
          <label>
            Widget name: <input name="name" />
          </label>
          <label>
            Language: <input name="language" />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default connect()(CreateWidget);
