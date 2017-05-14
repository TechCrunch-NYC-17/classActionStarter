export default function (state = {}, action) {
  switch (action.type) {
    case 'POST_Login' : {
      return { ...state, user: action.payload };
    }
  }
  return state;
}
