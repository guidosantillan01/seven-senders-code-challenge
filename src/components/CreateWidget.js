import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addWidget } from '../actions';
import ValidateName from './ValidateName';
import ValidateLanguage from './ValidateLanguage';

import style from './styles/CreateWidget.module.scss';

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
        <ValidateName />
        <ValidateLanguage />
      </div>
    );
  }
}

export default connect()(CreateWidget);
