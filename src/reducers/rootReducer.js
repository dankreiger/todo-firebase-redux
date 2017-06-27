import { combineReducers } from 'redux'
import { firebaseStateReducer } from 'react-redux-firebase'

// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseStateReducer
})

export default rootReducer;
