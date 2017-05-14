import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchLawsuitInfo } from '../action/lawsuitInfoAction';

class LawsuitInfo extends Component {
  componentWillMount(){
  }

  render() {
    return (
      <div>
        hello
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  ...state
});

// export default connect(mapStateToProps, { fetchLawsuitInfo })(LawsuitInfo);
