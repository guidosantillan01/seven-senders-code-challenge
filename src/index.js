import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import { saveState } from './localStorage';

import * as serviceWorker from './serviceWorker';
import './index.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
