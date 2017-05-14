import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { getUserId } from '../modules/auth';
import { fetchMyList } from '../actions/DashboardAction';



class Dashboard extends Component {
  componentWillMount() {
    const userID = getUserId();
    this.props.fetchMyList(userID);
  }

  renderList() {
    console.log('this.props.mylist in Dashboard', this.props.mylist);
    if (this.props.mylist) {
      return this.props.mylist.map(item => {
        console.log(item);
        return (
          <Card>
            <CardMedia
              overlay={<CardTitle title={item.title} subtitle='Overlay subtitle' />}
            >
              <div className='image'>
                <img src='http://placehold.it/600x300g' />
              </div>
            </CardMedia>
            <CardText>
              {item.description}
            </CardText>
          </Card>

        );
      });
    }
  }
  render() {
    return (
      <div className='children' id='dashboard'>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ dashboard }) => ({
  mylist: dashboard.mylist
});

export default connect(mapStateToProps, { fetchMyList })(Dashboard);
