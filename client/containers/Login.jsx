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
import { connect } from 'react-redux';
import SignUp from './SignUp'
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      open: false
    };
  }
  paperStyle = {
    height: 600,
    width: 600,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block'
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
    />
  );

  renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      onChange={(event, index, value) => input.onChange(value)}
      children={children}
      {...custom}
    />
  );

  /* -- Functional component to render spinner -- */
  renderSpinner = () => {
    if (this.props.fetching) {
      return (
        <div className='spinner'>
          <Loading type='bubbles' color='#e3e3e3' />
        </div>
      );
    }
  }
  render () {
    const { pristine, submitting, touch, field, errors } = this.props;
    return (
      <div className='children'>
        <Paper style={this.paperStyle} zDepth={5}>
          <div className='children'>
            <h1 className='header'>Start A Class Action Suit</h1>
            <form className='form'>
              <div className='fields'>
                <div className='field-line'>
                  <Field type='email' component={this.renderTextField} label='Username' />
                </div>
                <div className='field-line'>
                  <Field name='Password' type='password' component={this.renderTextField} label='Password' />
                </div>
              </div>
              <div className='button-line'>
                <RaisedButton
                  label='Sign Up'
                  className='button'
                  onClick={this.handleOpen}
                />
                <RaisedButton
                  type='submit'
                  label='Submit'
                  disabled={pristine || submitting}
                  className='button'
                />
                {this.renderSpinner()}
              </div>
            </form >
            <RaisedButton
              label='Facebook'
              href='/auth/facebook'
              className='button'
            />
          </div >
        </Paper>
        <SignUp open={this.state.open} />
      </div>
    );
  }
}

const mapStateToProps = ({ }) => ({
});

const validate = (values) => {
  const errors = {};
  const requiredFields = ['title', 'category', 'description'];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  return errors;
};

Login = reduxForm({
  form: 'Form',
  validate
})(Login);

export default connect(mapStateToProps)(Login);
