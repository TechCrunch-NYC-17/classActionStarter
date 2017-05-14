import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
class Auth extends Component {
  constructor (props, context) {
    super(props);
    this.state = {
      promise: false,
      auth: false
    };
  }

  componentWillMount () {
    axios.get('/get-info')
      .then((res) => {
        window.localStorage.setItem('token', res.data.token);
        window.localStorage.setItem('displayname', res.data.user.displayName);
        window.localStorage.setItem('id', res.data.user.id);
        window.localStorage.setItem('picture', res.data.picture);
      })
      .catch((err) => console.log(err))
      .then(() => {
        axios.post('/tokenauth', { token: window.localStorage.token })
          .then((res) => {
            if (res.data.validToken) {
              this.props.history.push('/dashboard');
            }
          })
          .catch((err) => console.error(err));
      });
  }

  render () {
    return (
      <div />
    );
  }
}
export default withRouter(Auth);
