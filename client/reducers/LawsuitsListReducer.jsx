export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_LAWSUITS_FULFILLED' : {
      return { ...state, lawsuits: action.payload.lawsuits };
    }
    case 'FETCH_LAWSUITS_REJECTED' : {
      return state;
    }
  }
  return state;
}
