import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { getUsername } from '../modules/auth';
import { fetchMyAccount } from '../actions/MyAccountAction';

class MyAccount extends Component {
  componentWillMount () {
    const username = getUsername();
    this.props.fetchMyAccount(username);
  }

  renderUserInfo () {
    if (this.props.myaccount) {
      const { username, displayname } = this.props.myaccount;
      return (
        <Table>
          <TableBody>
            <TableRow>
              <TableRowColumn>Username</TableRowColumn>
              <TableRowColumn>{displayname}</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>Email</TableRowColumn>
              <TableRowColumn>{username}</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
  }

  render () {
    return (
      <div className='children'>
        {this.renderUserInfo()}
      </div>
    );
  }
}

const mapStateToProps = ({ myAccount }) => ({
  myaccount: myAccount.myaccount
});

MyAccount.propTypes = {
  fetchMyAccount: React.PropTypes.func.isRequired,
  myaccount: React.PropTypes.any.isRequired
};

export default connect(mapStateToProps, { fetchMyAccount })(MyAccount);
