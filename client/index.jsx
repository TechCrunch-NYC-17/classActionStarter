import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, hashHistory } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

import App from './containers/App';
import Form from './containers/Form'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Provider store={store}>
        <div>
          <Route exact path='/' component={App} />
          <Route path='/form' component={Form} />
        </div>
      </Provider>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root'));

export default store;

