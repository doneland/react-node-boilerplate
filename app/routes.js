import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/home/home.js';
import Master from './components/master/master.js';


export default (
  <Route path="/" component={Master} >
    <IndexRoute component={Home} />
  </Route>
);