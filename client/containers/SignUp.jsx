import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class SignUp extends React.Component {
  state = {
    open: false
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  render () {
    return (
      <div>
        <RaisedButton label='Dialog' onTouchTap={this.handleOpen} />
        <Dialog
          title='Dialog With Actions'
          modal={false}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
        </Dialog>
      </div>
    );
  }
}

export default SignUp