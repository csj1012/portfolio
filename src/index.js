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
      <section className="portfolio__intro">
        <div className="portfolio__photo">Photo</div>
        <p className="portfolio__blurb">I'm a web designer and developer. I have lots of experience in Drupal. I created my first website when I was ten years old. I love my cat and I just learned how to knit. I'm pretty depressed. Please use my photo to discriminate against me. Let's get in touch!</p>
        <p className="portfolio__links">
          <ul>
            <li>My Work</li>
            <li>About Me</li>
            <li>Get in Touch?</li>
          </ul>
        </p>
      </section>
      <ProjectDetail />
      <ProjectsList />
    </div>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
