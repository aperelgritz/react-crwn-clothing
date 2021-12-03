const INITIAL_STATE = {
  currentUser: null
}

// if state is undefined (ie. not passed) fall back to INITAL_STATE
// Note: null is considered a valid value, would not trigger the fallback
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: action.payload
      }
    default:
      return state;
  }
}

export default userReducer;