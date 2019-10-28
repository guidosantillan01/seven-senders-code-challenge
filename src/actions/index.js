import uuidv4 from 'uuid/v4';

import { ADD_WIDGET, DELETE_WIDGET, OPEN_MODAL, CLOSE_MODAL } from './types';

export const addWidget = (widget = { name: '', language: '' }) => ({
  type: ADD_WIDGET,
  payload: {
    ...widget,
    id: uuidv4()
  }
});

export const deleteWidget = id => ({
  type: DELETE_WIDGET,
  payload: { id }
});

export const openModal = () => ({
  type: OPEN_MODAL,
  payload: { showModal: true }
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: { showModal: false }
});
