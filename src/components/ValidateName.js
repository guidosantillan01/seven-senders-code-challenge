import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import { addName } from '../actions';

import style from './styles/CreateWidget.module.scss';

class ValidateName extends Component {
  handleName = e => {
    e.preventDefault();
    const name = e.target['name'].value;
    const id = uuidv4();
    this.props.dispatch(addName({ id, name }));
    this.props.history.push(`/add-language/${id}`);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleName} className={style.container}>
          <label className={style.item}>
            What is the widget's name? <input name="name" />
          </label>
          <button type="submit" className={style.addButton}>
            Next step
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(ValidateName);
