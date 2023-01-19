import { useState } from "react"

const ManageBalance = (props) => {
    const [amount, setAmount] = useState();

    const updateBalance = (event) => {
        props.getBalance(event.target.value);
        setTimeout(() => {
            event.target.value = ""
        }, 1500)
    }
    return (
        <>
            <input type="number" id="txt-manage-balance" onBlur={updateBalance} />
        </>
    )
}

export default ManageBalance