const reducer = (state = 0, action) => {
    if (action.type === "deposit") {
        return state + parseFloat(action.payload);
    }
    if (action.type === "withdraw") {
        return state - parseFloat(action.payload);
    }
    return state;
}

export default reducer