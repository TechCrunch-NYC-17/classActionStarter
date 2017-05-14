import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import store from '../index';
import { connect } from 'react-redux';
class SignUp extends React.Component {
  state = {
    open: false
  };

  handleClose = () => {
    this.setState({ open: false });
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

  render() {
    const { pristine, submitting, touch, field, errors } = this.props;
    return (
      <Dialog
        title='SignUp'
        modal={false}
        open={this.props.open}
        onRequestClose={this.handleClose}
      >
        <form className='form'>
          <div className='fields'>
            <div className='field-line'>
              <Field type='email' component={this.renderTextField} label='Username' />
            </div>
            <div className='field-line'>
              <Field name='Display Name' component={this.renderTextField} label='Display Name' />
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

export default connect(mapStateToProps)(SignUp);

