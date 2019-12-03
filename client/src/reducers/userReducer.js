const initState = {
  loggedIn: false,
  currentUser: {}
};

export default function UserReducer(state = initState, action){
  switch (action.type){
    case "LOGIN":
      return {
        loggedIn: true,
        currentUser: action.payload
      }
    case "LOGOUT":
      return {
        loggedIn: false,
        currentUser: {}
      }
    default:
      return state
  }
};