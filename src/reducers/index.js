import {
  ADD_WIDGET,
  DELETE_WIDGET,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../actions/types';

const INITIAL_STATE = {
  widgets: [],
  showModal: false
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
      return {
        ...state,
        showModal: action.payload.showModal
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: action.payload.showModal
      };
    default:
      return state;
  }
};
