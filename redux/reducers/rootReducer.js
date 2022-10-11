import { combineReducers } from "redux"
import { UserReducer } from "./user";
// console.log(UserReducer)
const rootReducer = combineReducers({
    UserReducer: UserReducer
})

export default rootReducer;