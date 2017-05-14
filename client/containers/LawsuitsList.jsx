import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLawsuitsList } from '../actions/lawsuitsListAction';
import { withRouter } from 'react-router';
import { Card, CardActions, CardHeader, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import participate from '../actions/participateAction';
import { getUserId } from '../modules/auth';
import { fetchLawsuitInfo, fetchLawsuitUsers } from '../actions/lawsuitInfoAction';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';

class LawsuitsList extends Component {
  componentWillMount () {
    this.props.fetchLawsuitsList();
    this.state = {
      open: false,
      info: {},
      count: 1
    };
  }

  handleOpen = (infoObj) => {
    this.setState({info: infoObj});
    this.props.fetchLawsuitUsers({ lawsuitID: infoObj.id })
      .then(data => { this.setState({ count: (data.payload[0].length) }); });
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  addParticipate = (lawsuitId) => {
    const userId = getUserId();
    console.log(participate);
    participate({
      lawsuitID: lawsuitId,
      userID: userId
    });

    participate({
      lawsuitID: lawsuitId,
      userID: window.localStorage.userID
    });
  }

  // lawsuitInfo = (lawsuitId) => {
  //   this.props.fetchLawsuitInfo({ lawsuitID: lawsuitId }).then(data => console.log(data));
  //   this.props.fetchLawsuitUsers({ lawsuitID: lawsuitId }).then(data => console.log(data));
  // }

  render () {
    if (this.props.lawsuits === undefined) return <div>loading</div>;
    const actions = [
      <FlatButton
        label='Close'
        primary
        onTouchTap={this.handleClose}
      />
    ];
    return (
      <div className='children'>
        <Dialog
          title={this.state.info.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <CardText>
          {this.state.info.description}
          <hr />
          <div>Number of Signatures: {this.state.count}</div>
        </CardText>
        </Dialog>

        {this.props.lawsuits.map((lawsuit, index) => (
          <Card key={index} className='cards-container'>
            <CardTitle onClick={() => this.handleOpen(lawsuit)} title={lawsuit.title} subtitle={lawsuit.category} />
            <CardActions>
              <FlatButton label='More' onClick={() => this.props.history.push(`/lawsuit/${lawsuit.id}`)} />
              <FlatButton label='Participate' onClick={() => this.addParticipate(lawsuit.id)} />
              <FlatButton label='Share' />
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ lawsuits }) => ({
  ...lawsuits
});

export default connect(mapStateToProps, { fetchLawsuitsList, fetchLawsuitInfo, fetchLawsuitUsers })(LawsuitsList);
