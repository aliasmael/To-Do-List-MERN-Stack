import { combineReducers } from "redux"

import tasksReducer from "../components/Dashboard/redux/reducer"
import userReducer from "../components/LoginForm/redux/reducer"
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
  tasks: tasksReducer,
  user: userReducer,
  form: formReducer
})