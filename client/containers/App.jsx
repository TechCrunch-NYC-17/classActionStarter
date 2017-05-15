import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { toggleLeftNav, logoutUser } from '../actions/index';
import { getUsername, isUserAuthenticated } from '../modules/auth';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';

class App extends Component {
  handleToggle = () => {
    this.props.toggleLeftNav(this.props.open);
  }

  handleLogOut = () => this.props.logoutUser()
    .then(() => {
      this.props.history.push('/');
    })

  render = () => {
    const currentUser = getUsername();
    const auth = isUserAuthenticated();
    return (
      <div className='container'>
        <Header
          location={this.props.location.pathname}
          auth={auth}
          logOut={this.handleLogOut}
          handleToggle={this.handleToggle}
          handleClick={this.handleClick}
          handleTitleClick={() => this.props.history.push('/')}
          />
        <LeftNav
          auth={auth}
          user={currentUser}
          open={this.props.open}
          handleToggle={this.handleToggle}
          />
        <div className='children'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

function mapStateToProps ({ leftNavToggle }) {
  return {
    open: leftNavToggle.open
  };
}

App.propTypes = {
  toggleLeftNav: React.PropTypes.func.isRequired,
  children: React.PropTypes.any.isRequired,
  logoutUser: React.PropTypes.any.isRequired,
  location: React.PropTypes.any.isRequired,
  history: React.PropTypes.any.isRequired,
  open: React.PropTypes.bool.isRequired
};

export default withRouter(connect(mapStateToProps, { toggleLeftNav, logoutUser })(App));

