import { FETCH_LAWSUIT } from '../actions/index';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_LAWSUIT: {
      console.log('lawsuitReducer action.payload : ', action.payload);
      return { ...state, lawsuit: action.payload };
    }
    default: {
      return state;
    }
  }
}
