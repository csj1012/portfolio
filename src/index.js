import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './styles/css/App.css';

import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';

import Header from './containers/header';
import Intro from './containers/intro';
import ProjectDetail from './containers/project__detail';
import ProjectTeaserList from './containers/project__teaser-list';
import About from './containers/about';
import Contact from './containers/contact';
import Nav from './containers/nav';

const store = createStore(reducers);

const getClassname = () => {

  // console.log(this.props.location);
  return 'test';
 }

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>

      <div className={getClassname()}>
        <Header />
        <Nav />
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/work" component={ProjectTeaserList} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path={`/`}/>
        <Intro />
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
