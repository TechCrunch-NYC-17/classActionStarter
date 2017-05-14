import React from 'react';
import Dialog from 'material-ui/Dialog';
import { withRouter } from 'react-router-dom'
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import store from '../index';
import { connect } from 'react-redux';

import { postSignUp } from '../actions/index';

class SignUp extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  onSubmit = (inputs) => {
     this.props.postSignUp(inputs)
      .then((data) => {
        console.log(data)
        this.props.history.push('/dashboard')
      });
  }
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

  render() {
    const { handleSubmit, pristine, submitting, touch, field, errors } = this.props;
    return (
      <Dialog
        title='SignUp'
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
      >
        <form onSubmit={handleSubmit(this.onSubmit)} className='form'>
          <div className='fields'>
            <div className='field-line'>
              <Field name='email' type='email' component={this.renderTextField} label='Username' />
            </div>
            <div className='field-line'>
              <Field name='displayname' component={this.renderTextField} label='Display Name' />
            </div>
            <div className='field-line'>
              <Field name='password' type='password' component={this.renderTextField} label='Password' />
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
          </div>
        </form>
      </Dialog>
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

SignUp = reduxForm({
  form: 'Form',
  validate
})(SignUp);

export default withRouter(connect(mapStateToProps, { postSignUp })(SignUp));

