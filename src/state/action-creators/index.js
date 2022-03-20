export const depositMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type : 'deposit',
            payload : amount
        });
    }
}

export const withdrawMoney = (amount)=>{
    return (dispatch) =>{
        dispatch({
            type : 'withdrawMoney',
            payload : amount
        });
    }
}

export const increment = ()=>{
    return(dispatch) =>{
        dispatch({
            type: 'increment',
        })
    }
}
export const decrement = ()=>{
    return(dispatch) =>{
        dispatch({
            type: 'decrement',
        })
    }
}