import React, {Component} from 'react'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

// Load components
import Main from 'Main'
import DisplayIndex from 'DisplayIndex'


const router = (
  <Router history={hashHistory}>
    <Route component={Main}>
      <Route path="/" component={DisplayIndex}/>
    </Route>
  </Router>
)

export default router
