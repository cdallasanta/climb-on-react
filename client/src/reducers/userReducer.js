const initState = {
  logged_in: false,
  user: {}
};

export default function userReducer(state = initState, action){
  switch (action.type){
    case "LOGIN":
      console.log(action.payload);
      return {
        logged_in: true,
        user: action.payload
      }
    case "LOGOUT":
      return {
        logged_in: false,
        user: {}
      }
    default:
      return state
  }
};