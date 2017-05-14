import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsername } from '../modules/auth';
import { fetchMyList } from '../actions/DashboardAction';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';


class Dashboard extends Component {
  componentWillMount () {
    const username = getUsername();
    this.props.fetchMyList(username);
  }

  renderList() {
    console.log(this.props.mylist);
    if (this.props.mylist) {
      return this.props.mylist.map(item => {
        return (
          <TableRow>
            <TableRowColumn>{item.id}</TableRowColumn>
            <TableRowColumn>{item.title}</TableRowColumn>
            <TableRowColumn>{item.status}</TableRowColumn>
          </TableRow>
        );
      });
    }
  }
  render () {
    return (
      <Table
        multiSelectable={true} 
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>ID</TableHeaderColumn>
            <TableHeaderColumn>Title</TableHeaderColumn>
            <TableHeaderColumn>Status</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.renderList()}
        </TableBody>
      </Table>
    );
  }
}

const mapStateToProps = ({ dashboard }) => ({
  mylist: dashboard.mylist
});

export default connect(mapStateToProps, { fetchMyList })(Dashboard);
