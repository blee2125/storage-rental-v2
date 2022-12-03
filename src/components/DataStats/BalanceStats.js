import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function BalanceStats() {
    const leases = useSelector((state) => state.leaseState.leaseArray)

    const calcBalance = () => {
        let bal = 0
        leases.forEach(lease => {
            bal = bal + lease.totalCost - lease.payments
        })
        return Number(bal).toFixed(2)
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
            balance stats
            <p>Total Outstanding Balances - ${calcBalance()}</p>
            </Card>
        </div>
    )
}

export default (BalanceStats)