import React from 'react';
import { connect } from 'react-redux';

import { deleteWidget } from '../actions';

import style from './styles/Button.module.scss';

const DeleteButton = ({ dispatch, id }) => {
  return (
    <button
      onClick={() => {
        dispatch(deleteWidget(id));
      }}
      className={style.delete}
    >
      Delete
    </button>
  );
};

export default connect()(DeleteButton);
