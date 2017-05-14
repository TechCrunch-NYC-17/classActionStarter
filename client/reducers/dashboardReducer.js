import { FETCH_MY_LIST } from '../actions/DashboardAction';

export default function (state = [], action) {
  console.log(action.type);
  switch (action.type) {
    case FETCH_MY_LIST:
      console.log('dashboard action.payload', action.payload);
      return { ...state, mylist: action.payload };
    default:
      return state;
  }
}

