import { v4 as uuid } from "uuid"



let initialState = {users:[
    { 
        name: "Kelvin ", 
        phonenumber: " +233 45(345)-3454",
        location: "East-Legon",
        id: uuid()
      },
      { 
        name: "Dela",
        phonenumber: " +44 (345)564-7439 ",
        location: "Brimingham ",
        id: uuid() },
      { 
        name: " Orison",
        phonenumber: "+1 (546)725-0289",
        location: "College-Park ",
        id: uuid() },
]}

let ContactReducer =(state=initialState,action)=>{
  switch (action.type) {
    case "ADD_CONTACT":
        return{...state, users:[...state.users, action.payload]};
        
    default:
        return state
}
}

export default ContactReducer;