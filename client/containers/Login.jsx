import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
class Login extends Component {
  constructor (props) {
    super(props);
    this.state = {
      style: {
        height: 100,
        width: 100,
        margin: 20,
        textAlign: 'center',
        display: 'inline-block'
      }

    };
  }

  render () {
    return (
      <div>
        <Paper style={this.state.style} zDepth={5} />
      </div>
    );
  }
}

export default Login;
