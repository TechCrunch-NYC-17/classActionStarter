import React from 'react'
import { HashRouter as Router, Route, hashHistory } from 'react-router-dom'

import App from './containers/App'
import Form from './containers/Form'

export default (
  <Router history={hashHistory}>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/form' component={Form} />
    </div>
  </Router>
)
