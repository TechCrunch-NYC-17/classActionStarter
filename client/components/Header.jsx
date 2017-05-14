import React, { cloneElement } from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

const Header = ({ handleTitleClick, handleClick, logOut, handleToggle, auth, location }) => {
  const handleTouchTap = (label) => {
    history.push(label);
  };

  const renderFlatButton = (label, path) => {
    const flatButton = (
      <FlatButton
        label={label}
        onTouchTap={() => handleTouchTap(path)}
      />
    );
    if (label === 'Log Out') return cloneElement(flatButton, { onTouchTap: logOut });
    return flatButton;
  };

  const renderAppBar = (label, path) => (
    <div id='appBar' className='app-bar-container'>
      <AppBar
        title='Class Action Starter'
        onLeftIconButtonTouchTap={handleToggle}
        onTitleTouchTap={handleTitleClick}
        iconClassNameLeft='app-bar-left-icon'
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
