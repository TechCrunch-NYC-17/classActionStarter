import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';
import { getUserId } from '../modules/auth';
import { fetchMyAccount } from '../actions/MyAccountAction';


class MyAccount extends Component {
  componentWillMount () {
    const userId = getUserId();
    this.props.fetchMyAccount(userId);
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

  render () {
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
