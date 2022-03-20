import { combineReducers } from "redux";
import amountReduser from "./amountReduser";
import counterReduser from './counterReduser'

const reducers = combineReducers({
    amount : amountReduser,
    count : counterReduser,
})

export default reducers;