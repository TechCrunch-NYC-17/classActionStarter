import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { toggleLeftNav } from '../actions/index';
import { getUsername, isUserAuthenticated } from '../modules/auth';
import LeftNav from '../components/LeftNav';
import LawsuitsList from './LawSuitsList';


class App extends Component {
  componentWillMount () {
    injectTapEventPlugin();
  }

  handleToggle () {
    this.props.toggleLeftNav(true);
  }

  render () {
    const currentUser = getUsername();
    const auth = isUserAuthenticated();
    console.log(LeftNav);
    return (
      <div>
        <LeftNav
          auth={auth}
          user={currentUser}
          open={true}
          handleToggle={this.handleToggle}
        />
        <div>Hello World</div>
        <LawsuitsList />
      </div>
    );
  }
}

function mapStateToProps ({ leftNavToggle }) {
  return {
    open: leftNavToggle.open
  };
}

export default connect(mapStateToProps, {
  toggleLeftNav
})(App);

