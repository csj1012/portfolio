import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom';

import './index.css';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

import Header from './containers/header';
import ProjectsList from './containers/projects__list';
import ProjectDetail from './containers/project__detail';

const store = createStore(reducers);

console.log(this.state);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="portfolio__wrapper">
        <Header />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/" component={ProjectsList} />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
