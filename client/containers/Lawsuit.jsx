import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Snackbar from 'material-ui/Snackbar';
import { Card, CardText, CardTitle, CardMedia, CardHeader } from 'material-ui/Card';

import { isUserAuthenticated, getUsername } from '../modules/auth';
import { getLawsuit } from '../actions/index';

class Lawsuit extends Component {
  componentWillMount() {
    const lawsuitId = this.props.match.params.id;
    console.log('Lawsuit : ', lawsuitId);
    if (!isUserAuthenticated() || !lawsuitId) {
      this.props.history.push('/home');
    } else {
      this.props.getLawsuit(lawsuitId);
    }
  }

  renderLawsuit() {
    if (this.props.lawsuit.lawsuit) {
      console.log('rendering : ', this.props.lawsuit.lawsuit)
      const { title, category, size, description } = this.props.lawsuit.lawsuit;
      return (
        <Card>
          <CardMedia>
            <img src='http://placehold.it/600x300g' />
          </CardMedia>
          <CardTitle title={title} subtitle={category} />
          <CardText>
            {description}
            </CardText>
        </Card>
      )
    }
  }

  render() {
    return (
      <div className='children' id='lawsuit'>
        {this.renderLawsuit()}
      </div>
    );
  }
}

const mapStateToProps = ({ lawsuit }) => ({
  lawsuit
})

export default withRouter(connect(mapStateToProps, { getLawsuit })(Lawsuit));

