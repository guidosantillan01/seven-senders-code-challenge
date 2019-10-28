import style from './styles/CreateWidget.module.scss';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv4 from 'uuid/v4';

import ErrorForm from './ErrorForm';
import { addName, showError, hideError } from '../actions';

class ValidateName extends Component {
  handleName = e => {
    e.preventDefault();
    const name = e.target['name'].value.trim();
    if (name.length !== 0) {
      const id = uuidv4();
      this.props.dispatch(addName({ id, name }));
      this.props.dispatch(hideError());
      this.props.history.push(`/add-language/${id}`);
    } else {
      this.props.dispatch(showError());
    }
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleName} className={style.container}>
          <label className={style.item}>
            What is the widget's name? <input name="name" />
          </label>
          {this.props.showError && <ErrorForm />}
          <button type="submit" className={style.addButton}>
            Next step
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ showError }) => ({
  showError
});

export default connect(mapStateToProps)(ValidateName);
