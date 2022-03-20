import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreaters } from "../state/index";
// import reducers from '../state/reducers/index'

function Counter() {
    const dispatch = useDispatch();
    const { increment, decrement } = bindActionCreators(actionCreaters, dispatch);
    const counter = useSelector(state => state.count);
    const balance = useSelector(state => state.amount);
    return (
        <div className="mt-5">
            <h1>Counter</h1>
            <button className="btn btn-danger mr-2"
                onClick={() => { decrement() }}>-</button>
            {counter}
            <button className="btn btn-primary ml-2"
                onClick={() => { increment() }}>+</button>

            <h2>Amount state in Counter Component</h2>
            {balance}
        </div>
    );
}

export default Counter;
