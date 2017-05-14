import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from 'react-loading';

import { postLawsuit } from '../actions/index';


class Form extends Component {

  /* -- Calculates distance upon button click -- */
  onSubmit = (inputs) => {
    this.props.postLawsuit(inputs)
      .then(() => this.props.history.push('/lawsuits'));
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

  render = () => {
    const { handleSubmit, pristine, submitting, touch, field, errors } = this.props;

    return (
      <div className='children'>
        <h1 className='header'>Start A Class Action Suit</h1>
        <form onSubmit={handleSubmit(this.onSubmit)} className='form'>
          <div className='fields'>
            <div className='field-line'>
              <Field name='title' component={this.renderTextField} label='Title' />
            </div>
            <div className='field-line'>
              <Field
                name='category'
                component={this.renderSelectField}
                label='Category'
              >
                <MenuItem value='environment' primaryText='Environment' />
                <MenuItem value='finance' primaryText='Finance' />
                <MenuItem value='employment' primaryText='Employment' />
                <MenuItem value='civil_rights' primaryText='Civil Rights' />
                <MenuItem value='product_defects' primaryText='Product Defects' />
                <MenuItem value='dangerous_drugs' primaryText='Dangerous Drugs' />
              </Field>
            </div>
            <div className='field-line'>
              <Field name='defendant' component={this.renderTextField} label='Defendant' />
            </div>
            <div className='field-line'>
              <Field name='size' type='number' component={this.renderTextField} label='Desired No. of Participants' />
            </div>
            <div className='field-line'>
              <Field
                name='description'
                component={this.renderTextField}
                label='Description'
                multiLine
                rows={5}
              />
            </div>
          </div>
          <div className='button-line'>
            <RaisedButton
              type='submit'
              label='Submit'
              disabled={pristine || submitting}
              className='button'
            />
            {this.renderSpinner()}
          </div>
        </form >
      </div >
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


Form = reduxForm({
  form: 'Form',
  validate
})(Form);

export default connect(mapStateToProps, { postLawsuit })(Form);

