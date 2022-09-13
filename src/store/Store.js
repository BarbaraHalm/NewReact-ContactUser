import {legacy_createStore as createStore} from 'redux'
import ContactReducer from "../Reducer/ContactReducer"

let store =createStore(ContactReducer)

export default store;