import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Card, CardText, CardTitle, CardMedia } from 'material-ui/Card';

import { isUserAuthenticated } from '../modules/auth';
import { getLawsuit } from '../actions/index';

class Lawsuit extends Component {
  componentWillMount () {
    const lawsuitId = this.props.match.params.id;
    if (!isUserAuthenticated() || !lawsuitId) {
      this.props.history.push('/home');
    } else {
      this.props.getLawsuit(lawsuitId);
    }
  }

  renderLawsuit () {
    if (this.props.lawsuit.lawsuit) {
      const { id, title, category, description, filename } = this.props.lawsuit.lawsuit;
      console.log(id, filename);
      return (
        <Card>
          <CardMedia>
            <img src={`/photos/${id} ${filename}`} />
          </CardMedia>
          <CardTitle title={title} subtitle={category} />
          <CardText>
            {description}
          </CardText>
        </Card>
      );
    }
  }

  render () {
    return (
      <div className='children' id='lawsuit'>
        {this.renderLawsuit()}
      </div>
    );
  }
}

const mapStateToProps = ({ lawsuit }) => ({
  lawsuit
});

Lawsuit.propTypes = {
  lawsuit: React.PropTypes.any.isRequired,
  history: React.PropTypes.array.isRequired,
  getLawsuit: React.PropTypes.func.isRequired,
  match: React.PropTypes.any.isRequired
};

export default withRouter(connect(mapStateToProps, { getLawsuit })(Lawsuit));

