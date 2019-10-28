import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addLanguage } from '../actions';

import style from './styles/CreateWidget.module.scss';

class ValidateLanguage extends Component {
  handleLanguage = e => {
    e.preventDefault();
    const language = e.target['language'].value;
    console.log(language);
    const id = this.props.match.params.id;
    this.props.dispatch(addLanguage({ id, language }));
    this.props.history.push('/');
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleLanguage} className={style.container}>
          <label className={style.item}>
            What is the widget's language? <input name="language" />
          </label>
          <button type="submit" className={style.addButton}>
            Finish
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(ValidateLanguage);
