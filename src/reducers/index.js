import { ADD_WIDGET, DELETE_WIDGET } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_WIDGET:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          language: action.payload.language
        }
      ];
    case DELETE_WIDGET:
      return state.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};
