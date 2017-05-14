import { FETCH_MY_LIST } from '../actions/DashboardAction';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_MY_LIST:
      return { ...state, mylist: action.payload };
    default:
      return state;
  }
}

