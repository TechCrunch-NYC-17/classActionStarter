import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { Field, reduxForm } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from 'react-loading';
import store from '../index';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  paperStyle = {
    height: 600,
    width: 600,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
  render () {
    return (
      <div className='children'>
        <Paper style={this.paperStyle} zDepth={5} />
      </div>
    );
  }
}

export default Login;
