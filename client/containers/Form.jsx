import React, { Component } from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash/debounce';
import { Field, reduxForm } from 'redux-form';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import Loading from 'react-loading';
import store from '../index';

class Form extends Component {

  /* -- Calculates distance upon button click --*/
  onSubmit (inputs) {
    // store.dispatch({ type: 'FETCHING', payload: true })
  }
  
  /* -- Functional component to render spinner --*/
  renderSpinner () {
    if (this.props.fetching) {
      return (
        <div className="spinner">
          <Loading type='bubbles' color='#e3e3e3' />
        </div>
      );
    }
  }  

  render () {
    const { handleSubmit, pristine, submitting, touch, field } = this.props;

    return (
      <div className="container">
        <h1 className="header">CHOOSE YOUR JOURNEY</h1>
        <form onSubmit={handleSubmit(this.onSubmit)} className="form">
          <div className="fields">

          </div>
          <div className="button-line">
            {this.renderSpinner()}
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({  }) => ({
});

Form = reduxForm({
  form: 'Form',
})(Form);


export default connect(mapStateToProps)(Form);

