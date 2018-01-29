import { combineReducers } from "redux"

import tasksReducer from "../components/Dashboard/redux/reducer"
import userReducer from "../components/LoginForm/redux/reducer"

export default combineReducers({
  tasks: tasksReducer,
  user: userReducer
})