const amountReduser = (state=0,action)=>{
    if(action.type === 'deposit'){
        return state + action.payload;
    }
    else if(action.type === 'withdrawMoney'){
        return state - action.payload;
    }
    else {
        return state;
    }
}

export default amountReduser;