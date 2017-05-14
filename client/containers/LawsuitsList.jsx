import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLawsuitsList } from '../actions/LawsuitsListAction';
import Lawsuit from '../components/Lawsuit'

class LawsuitsList extends Component {
  componentWillMount () {
    this.props.fetchLawsuitsList();
  }
  render(){
  
    if (this.props.lawsuits === undefined) return <div>loading</div>

    return (
      <div>
        {this.props.lawsuits.map((lawsuit, index) => (
          <Lawsuit lawsuit={lawsuit} key={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ lawsuits }) => ({
  ...lawsuits
});

export default connect(mapStateToProps, { fetchLawsuitsList })(LawsuitsList);
