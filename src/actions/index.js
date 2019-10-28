import { ADD_WIDGET, DELETE_WIDGET } from './types';

export const addWidget = widget => ({
  type: ADD_WIDGET,
  payload: {
    ...widget
  }
});

export const deleteWidget = id => ({
  type: DELETE_WIDGET,
  payload: id
});
