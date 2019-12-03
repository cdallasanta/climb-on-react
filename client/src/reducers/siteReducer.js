const initSite = {
  elements: [],
  site_contact: {}
}

export default function siteReducer(state = initSite, action){
  switch(action.type){
    case "SET_SITE":
      debugger;
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}