import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { getUserId } from '../modules/auth';
import { fetchMyList } from '../actions/DashboardAction';

class Dashboard extends Component {
  componentWillMount () {
    const userId = getUserId();
    console.log(userId)
    this.props.fetchMyList(userId);
  }

  renderList () {
    console.log('this.props.mylist in Dashboard', this.props.mylist);
    if (this.props.mylist) {
      return this.props.mylist.map(item => {
        return (
          <Card>
            <CardHeader
              title={item.title}
              subtitle={item.category}
            />
            <CardMedia>
              <img src={`/photos/${item.id} ${item.filename}`} />
            </CardMedia>
            <CardActions>
              <FlatButton label='More' onClick={() => this.props.history.push(`/lawsuit/${item.id}`)} />
              <FlatButton label='Share' />
            </CardActions>
          </Card>
        );
      });
    }
  }

  render () {
    if (this.props.mylist === undefined) return <div>loading</div>;
    return (
      <div className='children' id='dashboard'>
        {this.props.mylist.map(item => {
          console.log(item);
          return (
            <Card className='cards-container'>
              <CardHeader
                title={item.title}
                subtitle={item.category}
              />
              <CardMedia>
                <img src={`/photos/${item.lawsuitID} ${item.filename}`} />
              </CardMedia>
              <CardActions>
                <FlatButton label='More' onClick={() => this.props.history.push(`/lawsuit/${item.id}`)} />
                <FlatButton label='Share' />
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = ({ dashboard }) => ({
  mylist: dashboard.mylist
});

export default connect(mapStateToProps, { fetchMyList })(Dashboard);
