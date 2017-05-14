import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { toggleLeftNav } from '../actions/index';
import { getUsername, isUserAuthenticated } from '../modules/auth';
import LeftNav from '../components/LeftNav';
import Header from '../components/Header';

class App extends Component {
  handleToggle = () => {
    this.props.toggleLeftNav(this.props.open);
  }

  render = () => {
    const currentUser = getUsername();
    const auth = isUserAuthenticated();
    return (
      <div>
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
        <div>
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

export default withRouter(connect(mapStateToProps, { toggleLeftNav })(App));

