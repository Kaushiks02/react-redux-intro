export const depositMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
}

export const withdrawMoney = (amount) => {
    return (dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}


export const manageBalance = (amount) => {
    console.log("amount balance change from manage balance", amount);
    return (dispatch) => {
        dispatch({
            type: 'manage_balance',
            payload: amount
        })
    }
}