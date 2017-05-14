import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLawsuitsList } from '../actions/LawsuitsListAction';

class LawsuitsList extends Component {
  componentWillMount () {
    this.props.fetchLawsuitsList();
  }
  render(){
    console.log(this.props);
    return(
      <div>yo</div>
    )
  }

}

const mapStateToProps = ({ lawsuits }) => ({
  lawsuits
});

export default connect(mapStateToProps, { fetchLawsuitsList })(LawsuitsList);