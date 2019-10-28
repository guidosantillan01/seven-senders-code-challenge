import { createStore } from 'redux';

import reducers from './reducers';

export default () => {
  const persistedState = localStorage.getItem('widgetApp')
    ? JSON.parse(localStorage.getItem('widgetApp'))
    : undefined;

  const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
