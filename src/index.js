import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';

import './index.css';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <App />
  </Provider>
);

import * as serviceWorker from './serviceWorker';

ReactDOM.render(jsx, document.getElementById('root'));

serviceWorker.unregister();
