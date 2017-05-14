export function authenticateUser (token, username) {
  window.localStorage.setItem('token', token);
  window.localStorage.setItem('username', username);
}

export function isUserAuthenticated () {
  return window.localStorage.getItem('token') !== null;
}

export function getUsername () {
  return window.localStorage.getItem('username');
}

export function getUserId () {
  return window.localStorage.userID;
}

export function deauthenticateUser () {
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('username');
  window.localStorage.removeItem('userID');
}

export function getToken () {
  return window.localStorage.getItem('token');
}
