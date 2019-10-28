import React from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';

import { openModal, closeModal, deleteWidget } from '../actions';

import style from './styles/Modal.module.scss';

const DeleteConfirmationModal = ({ dispatch, showModal, id }) => {
  return (
    <div>
      <button onClick={() => dispatch(openModal())} className={style.delete}>
        Delete
      </button>
      <ReactModal
        isOpen={showModal}
        contentLabel="Delete Confirmation Modal"
        ariaHideApp={false}
        onRequestClose={() => dispatch(closeModal())}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
        className={style.Modal}
      >
        <p>Are you sure you want to delete this Widget? </p>
        <button
          onClick={() => {
            dispatch(deleteWidget(id));
            dispatch(closeModal());
          }}
          className={style.yes}
        >
          Yes
        </button>
        <button
          onClick={() => {
            dispatch(closeModal());
          }}
          className={style.no}
        >
          No
        </button>
      </ReactModal>
    </div>
  );
};

const mapStateToProps = ({ showModal, widgets }) => ({
  showModal
  // widget: widgets.find((widget) => widget.id === id)
});

export default connect(mapStateToProps)(DeleteConfirmationModal);
