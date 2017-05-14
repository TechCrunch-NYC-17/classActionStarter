import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, hashHistory, Switch } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import Home from './components/Home';
import Auth from './components/Auth';
import App from './containers/App';
import Form from './containers/Form';
import Dashboard from './containers/Dashboard';
import myAccount from './containers/MyAccount';
import LawsuitsList from './containers/LawsuitsList';
import Login from './containers/Login';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

injectTapEventPlugin();

ReactDOM.render(
  <MuiThemeProvider>
    <Router history={hashHistory}>
      <Provider store={store}>
        <App>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/form' component={Form} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/myaccount' component={myAccount} />
            <Route path='/lawsuits' component={LawsuitsList} />
            <Route path='/login' component={Login} />
            <Route path='/auth' component={Auth} />
          </Switch>
        </App>
      </Provider>
    </Router>
  </MuiThemeProvider>
  , document.getElementById('root'));

export default store;

