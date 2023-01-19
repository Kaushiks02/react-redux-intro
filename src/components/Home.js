import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";
import Balance from "./Balance";
import ManageBalance from "./ManageBalance";

const Home = () => {
    const dispatch = useDispatch();
    const { amount } = useSelector(state => state.reducers)
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)

    const [updatedBalance, setUpdatedBalance] = useState(0);
    const getBalance = (balance) => {
        console.log("balance from getbalance", balance);
        setUpdatedBalance(balance)
    }
    return (
        <>
            <ManageBalance getBalance={getBalance} />
            <button onClick={() => {
                depositMoney(updatedBalance)
            }}>+</button>
            <Balance />
            <button onClick={() => withdrawMoney(updatedBalance)}> -</button >
        </>
    )
}

export default Home