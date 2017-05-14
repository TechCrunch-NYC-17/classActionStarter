import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { getUserId } from '../modules/auth';
import { fetchMyList } from '../actions/DashboardAction';



class Dashboard extends Component {
  componentWillMount() {
    const userId = getUserId();
    this.props.fetchMyList(userId);
  }

  renderList() {
    console.log('this.props.mylist in Dashboard', this.props.mylist);
    if (this.props.mylist) {
      return this.props.mylist.map(item => {
        console.log(item);
        return (
          <Card>
            <CardHeader
              title={item.title}
              subtitle={item.category}
            />        
            <CardMedia>
              <img src='http://placehold.it/300x150g' />
            </CardMedia>
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
