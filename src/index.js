import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

import Header from './containers/header';
import ProjectsList from './containers/projects__list';
import ProjectDetail from './containers/project__detail';

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <div className="portfolio__wrapper">
      <Header />
      <ProjectDetail />
      <ProjectsList />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
