import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import CalcFunc from "../../functions/CalcFunc";

function PaymentStats() {
    const payments = useSelector((state) => state.paymentState.paymentArray)

    const calcTotal = CalcFunc.calcSum(payments, 'payment')

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h4>Payments Stats</h4>
                <p>Total Payments - ${calcTotal}</p>
            </Card>
        </div>
    )
}

export default (PaymentStats)