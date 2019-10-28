import React from 'react';
import { connect } from 'react-redux';

import { deleteWidget } from '../actions';

const DeleteButton = ({ dispatch, id }) => {
  return (
    <button
      onClick={() => {
        dispatch(deleteWidget(id));
      }}
    >
      Delete
    </button>
  );
};

export default connect()(DeleteButton);
