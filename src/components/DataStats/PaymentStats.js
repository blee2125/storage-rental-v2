import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function PaymentStats() {
    const payments = useSelector((state) => state.paymentState.paymentArray)

    const calcTotal = () => {
        let total = 0
        payments.forEach(pay => {
            total = total + pay.payment
        })
        return Number(total).toFixed(2)
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h4>Payments Stats</h4>
                <p>Total Payments - ${calcTotal()}</p>
            </Card>
        </div>
    )
}

export default (PaymentStats)