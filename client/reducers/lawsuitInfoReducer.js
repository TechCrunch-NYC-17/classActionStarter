export default function (state = {}, action) {
  switch (action.type) {
    case 'FETCH_LAWSUITINFO_FULFILLED' : {
      return { ...state, lawsuitInfo: action.payload };
    }
    case 'FETCH_LAWSUITINFO_REJECTED' : {
      return state;
    }
    case 'FETCH_LAWSUITUSERS_FULFILLED' : {
      return { ...state, lawsuitusers: action.payload };
    }
    case 'FETCH_LAWSUITUSERS_REJECTED' : {
      return state;
    }
  }
  return state;
}
