import { combineReducers } from "redux";
import authReducer from "./auth";
import chatReducer from "./chat";

export default combineReducers({
    // auth: authReducer  This did not work either
    authReducer,
    chatReducer
})