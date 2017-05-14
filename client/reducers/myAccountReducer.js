import { FETCH_MY_ACCOUNT } from '../actions/MyAccountAction';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_MY_ACCOUNT:
      return { ...state, myaccount: action.payload };
    default:
      return state;
  }
}

