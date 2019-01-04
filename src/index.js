import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom'
import App from './containers/app'

import './styles/css/App.css'

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('app'));
registerServiceWorker();
