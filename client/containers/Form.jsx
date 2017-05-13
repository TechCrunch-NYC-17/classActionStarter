import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Field, reduxForm } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import { AutoComplete } from 'redux-form-material-ui';
import Loading from 'react-loading';
import store from '../index';

class Form extends Component {

  /* -- Calculates distance upon button click --*/
  onSubmit = (inputs) => {
    // store.dispatch({ type: 'FETCHING', payload: true })
  }
  
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
        <h1 className="header">CHOOSE YOUR JOURNEY</h1>
        <form onSubmit={handleSubmit(this.onSubmit)} className="form">
          <div className="fields">
            <Field
              name="from"
              type="text"
              className="field"
              label="From"
              hintText="From"
              floatingLabelText="From"
              fullWidth={true}
            />
            <Field
              name="to"
              type="text"
              className="field"
              label="To"
              hintText="To"
              floatingLabelText="To"
              fullWidth={true}
            />
          </div>
          <div className="button-line">
            <RaisedButton
              type="submit"
              label="Calculate distance!"
              disabled={pristine || submitting}
              className="button"
            />
            {this.renderSpinner()}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({  }) => ({,
});

App = reduxForm({
  form: 'App',
})(App);


export default connect(mapStateToProps)(Form);

