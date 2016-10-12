import React from 'react'
import ReactDOM from 'react-dom'
import router from './router'

// Load foundation
$(document).foundation();

// Load custom css: app.scss
import 'style!css!sass!applicationStyles'

ReactDOM.render(
  router
  ,document.getElementById('app')
);
