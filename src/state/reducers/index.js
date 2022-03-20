import { combineReducers } from "redux";
import amountReduser from "./amountReduser";

const reducers = combineReducers({
    amount : amountReduser,
})

export default reducers;