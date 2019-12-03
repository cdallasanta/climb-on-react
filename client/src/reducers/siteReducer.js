const initSite = {
  elements: [],
  site_contact: {}
}

export default function siteReducer(state = initSite, action){
  switch(action.type){
    case "SET_SITE":
      return action.payload;
    default:
      return state;
  }
}