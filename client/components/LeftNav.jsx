import React from 'react';
import { withRouter } from 'react-router';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';

const LeftNav = ({ auth, open, handleToggle, history }) => {
  const handleTouchTap = (label) => {
    history.push(label);
  };

  // const leftNavUnAuth = [{ link: '/login', label: 'Log In' }, { link: '/signup', label: 'Sign Up' }];
  const leftNavAuth = [
    { link: '/dashboard', label: 'Dashboard' },
    { link: '/form', label: 'Start Action' },
    { link: '/lawsuits', label: 'Pending Lawsuits' },
    { link: '/myaccount', label: 'My Account' }
  ];

  const renderMenuItems = menu => menu
    .map(({ link, label }, index) =>
      <MenuItem key={index} className='left-navmenu-item' onTouchTap={() => handleTouchTap(link)}>{label}</MenuItem>);

  const renderDrawer = menu => {
    console.log(handleToggle);
    return (
      <Drawer open={open}>
        <Menu onItemTouchTap={handleToggle}>
          <MenuItem onTouchTap={() => handleTouchTap('/')}>Home</MenuItem>
          <Divider />
          {renderMenuItems(menu)}
          <Divider />
          <MenuItem onTouchTap={handleToggle}>Close</MenuItem>
        </Menu>
      </Drawer>
    );
  };
  // if (!auth) {
  //   return renderDrawer(leftNavUnAuth);
  // }
  return renderDrawer(leftNavAuth);
};

export default withRouter(LeftNav);
