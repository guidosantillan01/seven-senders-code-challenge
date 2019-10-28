import {
  ADD_WIDGET,
  DELETE_WIDGET,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_NAME,
  ADD_LANGUAGE,
  SHOW_ERROR,
  HIDE_ERROR
} from '../actions/types';

const INITIAL_STATE = {
  widgets: [],
  showModal: false,
  showError: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return {
        ...state,
        widgets: [
          ...state.widgets,
          {
            id: action.payload.id,
            name: action.payload.name,
            language: action.payload.language
          }
        ]
      };
    case DELETE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(({ id }) => id !== action.payload.id)
      };
    case OPEN_MODAL:
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal
      };
    case ADD_NAME:
      return {
        ...state,
        widgets: [
          ...state.widgets,
          {
            id: action.payload.id,
            name: action.payload.name,
            language: ''
          }
        ]
      };
    case ADD_LANGUAGE:
      return {
        ...state,
        widgets: state.widgets.map(widget => {
          if (widget.id === action.payload.id) {
            return {
              ...widget,
              language: action.payload.language
            };
          }
          return widget;
        })
      };
    case SHOW_ERROR:
    case HIDE_ERROR:
      return {
        ...state,
        showError: action.payload.showError
      };
    default:
      return state;
  }
};
