import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWidget } from '../actions';

import style from './CreateWidget.module.scss';

class CreateWidget extends Component {
  handleCreateWidget = e => {
    e.preventDefault();
    const widget = {
      name: e.target['name'].value,
      language: e.target['language'].value
    };
    this.props.dispatch(addWidget(widget));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleCreateWidget} className={style.container}>
          <label className={style.item}>
            Widget name: <input name="name" />
          </label>
          <label className={style.item}>
            Language: <input name="language" />
          </label>
          <button type="submit" className={style.addButton}>
            Add widget
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(CreateWidget);
