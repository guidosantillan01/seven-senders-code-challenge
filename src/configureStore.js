import { createStore } from 'redux';

import reducers from './reducers';

const INITIAL_STATE = {
  widgets: [],
  showModal: false
};

export default () => {
  const persistedState = localStorage.getItem('widgetApp')
    ? JSON.parse(localStorage.getItem('widgetApp'))
    : INITIAL_STATE;

  const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
