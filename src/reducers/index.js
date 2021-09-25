import { combineReducers } from "redux"
import cochesReducer from "./cochesReducer"

export default combineReducers ({
    coches: cochesReducer
});