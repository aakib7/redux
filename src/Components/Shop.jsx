import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreaters } from '../state/index'


// alter the state
// for that we require a reduser 
// to work with reduser we require a action creater
// action creator tell the reduser what to do
// action reactor distatch a action and send 2 thigs type and payload
// for dispatch we use useDiapatch() hook


function Shop() {
    const dispatch = useDispatch();
    // const actions = bindActionCreators(actionCreaters, dispatch);
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreaters, dispatch);

    // get state value
    const balance = useSelector(state => state.amount)

    return (

        // without bind action creator
        // <div className='mt-5'>
        //     <button className="btn btn-danger mr-2"
        //         onClick={() => { dispatch(actionCreaters.withdrawMoney(100)) }}>
        //         -</button>
        //     Deposite / Withdraw
        //     <button className="btn btn-primary ml-2"
        //         onClick={() => { dispatch(actionCreaters.depositMoney(100)) }}>
        //         +</button>
        // </div>


        // with bind action creator
        // bindActionCreators and without destracturing the obj
        // <div className='mt-5'>
        //     <button className="btn btn-danger mr-2"
        //         onClick={() => actions.withdrawMoney(100)}>
        //         -</button>
        //     Deposite / Withdraw
        //     <button className="btn btn-primary ml-2"
        //         onClick={() => actions.depositMoney(100)}>
        //         +</button>
        // </div >

        // with bind action creator
        // bindActionCreators and with  destracturing the obj
        <div className='mt-5'>
            <button className="btn btn-danger mr-2"
                onClick={() => withdrawMoney(100)}>
                -</button>
            Deposite / Withdraw
            <button className="btn btn-primary ml-2"
                onClick={() => depositMoney(100)}>
                +</button> balance = {balance}
        </div >
    )
}

export default Shop