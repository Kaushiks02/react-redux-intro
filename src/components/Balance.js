import { useSelector } from "react-redux"

const Balance = () => {
    const { amount } = useSelector(state => state.reducers)
    return (
        <>
            {amount}
        </>
    )
}

export default Balance