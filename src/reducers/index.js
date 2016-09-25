import { combineReducers } from "redux";
import CommentReducer from "./CommentReducer.js";
import LoginReducer from "./LoginReducer.js"
import SortReducer from "./SortReducer.js";
import AlertPlaneReducer from "./AlertPlaneReducer.js";
import HandleDataReducer from "./HandleDataReducer.js";

// reducers 汇总  
const rootReducer = combineReducers({
    CommentReducer,
    LoginReducer,
    SortReducer,
    AlertPlaneReducer,
    HandleDataReducer
});

export default rootReducer;