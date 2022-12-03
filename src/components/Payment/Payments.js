import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { getAllPayments } from "../../reducers/PaymentReducer"
import PaymentList from "./List/PaymentList";

function Leases(props) {
    const paymentArray = useSelector((state) => state.paymentState.paymentArray)

    useEffect(() => {
        props.getAllPayments()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <PaymentList
                paymentArray={paymentArray}
            />
        </div>
    )
}

export default connect(null, { getAllPayments }) (Leases)