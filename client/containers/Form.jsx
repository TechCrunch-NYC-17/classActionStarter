import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Field, reduxForm } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from 'react-loading';
import store from '../index';

class Form extends Component {

  /* -- Calculates distance upon button click --*/
  onSubmit = (inputs) => {
    // store.dispatch({ type: 'FETCHING', payload: true })
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

  /* -- Functional component to render spinner --*/
  renderSpinner = () => {
    if (this.props.fetching) {
      return (
        <div className="spinner">
          <Loading type='bubbles' color='#e3e3e3' />
        </div>
      );
    }
  }

  render = () => {
    const { handleSubmit, pristine, submitting, touch, field } = this.props;

    return (
      <div className="container">
        <h1 className="header">Start A Class Action Suit</h1>
        <form onSubmit={handleSubmit(this.onSubmit)} className="form">
          <div className="fields">
            <div className="field-line">
              <Field name="title" component={this.renderTextField} label="Title" />
            </div>
            <div className="field-line">
              <Field
                name="category"
                component={this.renderSelectField}
                label="Category"
              >
                <MenuItem value="environment" primaryText="Environment" />
                <MenuItem value="finance" primaryText="Finance" />
                <MenuItem value="employment" primaryText="Employment" />
                <MenuItem value="civil_rights" primaryText="Civil Rights" />
                <MenuItem value="product_defects" primaryText="Product Defects" />
                <MenuItem value="defective_drugs" primaryText="Defective Drugs" />
              </Field>
            </div>
            <div className="field-line">
              <Field
                name="description"
                component={this.renderTextField}
                label="Description"
                multiLine={true}
                rows={5}
              />
            </div>
          </div>
          <div className="button-line">
            <RaisedButton
              type="submit"
              label="Submit"
              disabled={pristine || submitting}
              className="button"
            />
            {this.renderSpinner()}
          </div>
        </form >
      </div >
    )
  }
}

const mapStateToProps = ({ }) => ({
});

Form = reduxForm({
  form: 'Form',
})(Form);


export default connect(mapStateToProps)(Form);

