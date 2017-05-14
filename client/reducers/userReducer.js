export default function (state = {}, action) {
  switch (action.type) {
    case 'POST_SignUp' : {
      return { ...state, user: action.payload };
    }
  }
  return state;
}
