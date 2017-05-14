export default function (state = {}, action) {
  switch (action.type) {
    case 'POST_Login': {
      console.log('action.pay : ', action.payload);
      return { ...state, login: action.payload };
    }
  }
  return state;
}
