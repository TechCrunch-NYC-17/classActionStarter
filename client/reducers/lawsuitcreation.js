export default function (state = {}, action) {
  switch (action.type) {
    case 'POST_LAWSUIT': {
      return { ...state, lawsuitID: action.payload };
    }
  }
  return state;
}
