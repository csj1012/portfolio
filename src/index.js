import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import ProjectsList from './components/projects__list';
import ProjectDetail from './components/project__detail';


ReactDOM.render(
  <BrowserRouter>
    <div>
      <Route path="/project/:id" component={ProjectDetail} />
      <Route path="/" component={ProjectsList} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
