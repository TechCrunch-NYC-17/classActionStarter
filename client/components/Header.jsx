import React, { cloneElement } from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  appBar: {
    backgroundColor: 'white',
    cursor: 'pointer',
    position: 'fixed',
    height: '70px'
  },
  title: {
    color: 'black',
    opacity: 1,
    fontFamily: 'Source Sans Pro',
    fontSize: '50px',
    marginLeft: '30px'
  },
  button: {
    color: 'grey'
  },
  buttonLabel: {
    fontSize: '17px'
  }
};

const Header = ({ handleTitleClick, handleClick, logOut, handleToggle, auth, location, history }) => {
  const handleTouchTap = (label) => {
    history.push(label);
  };

  const renderFlatButton = (label, path) => {
    const flatButton = (
      <FlatButton
        label={label}
        onTouchTap={() => handleTouchTap(path)}
        style={styles.button}
        labelStyle={styles.buttonLabel}
      />
    );
    if (label === 'Log Out') return cloneElement(flatButton, { onTouchTap: logOut });
    return flatButton;
  };

  const renderAppBar = (label, path) => (
    <div className='app-bar-container'>
      <AppBar
        title='ACTION STARTER'
        style={styles.appBar}
        titleStyle={styles.title}
        onLeftIconButtonTouchTap={handleToggle}
        onTitleTouchTap={handleTitleClick}
        iconStyleLeft={{ background: 'black' }}
        iconElementRight={renderFlatButton(label, path)}
        zDepth={0}
      />
    </div>
  );

  if (!auth) {
    if (location === '/login') return renderAppBar('Sign UP', '/signup');
    return renderAppBar('Log In', '/login');
  }
  return renderAppBar('Log Out');
};

export default withRouter(Header);
