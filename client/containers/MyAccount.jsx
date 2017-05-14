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
    if (this.props) {
      <Table>
        <TableBody>
          <TableRow>
            <TableRowColumn>Username</TableRowColumn>
            <TableRowColumn>{this.props.username}</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>;
    }
  }

  render() {
    return (
      <div className='children'>
        {this.renderUserInfo()}
      </div>
    )
  }
}

const mapStateToProps = ({ myAccount }) => ({
  username: myAccount.username
});

export default connect(mapStateToProps, { fetchMyAccount })(MyAccount);
