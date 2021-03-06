import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardHeader, CardActions, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { getUserId } from '../modules/auth';
import { fetchMyList } from '../actions/DashboardAction';

class Dashboard extends Component {
  componentWillMount () {
    const userId = getUserId();
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

  backgroundStyle = {
    backgroundImage: "url('/assets/splash_05.jpg')",
    backgroundSize: 'cover',
    height: '80%',
    width: '100%',
    marginTop: '3%',
    marginRight: '3%',
    opacity: '.7'
  }

  render() {
    if (this.props.mylist === undefined) return <div>loading</div>;
    return (
      <div className='children' style={this.backgroundStyle} >
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

Dashboard.propTypes = {
  mylist: React.PropTypes.array.isRequired,
  history: React.PropTypes.array.isRequired,
  fetchMyList: React.PropTypes.func.isRequired
};

export default connect(mapStateToProps, { fetchMyList })(Dashboard);
