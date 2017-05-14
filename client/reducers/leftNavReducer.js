import { TOGGLE_LEFT_NAV } from '../actions/index';

const INITIAL_STATE = { open: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case TOGGLE_LEFT_NAV:
      return { ...state, open: action.payload };
    default:
      return state;
  }
}