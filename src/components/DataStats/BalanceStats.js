import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";
import CalcFunc from "../../functions/CalcFunc";

function BalanceStats() {
    const leases = useSelector((state) => state.leaseState.leaseArray)

    const calcBalance = CalcFunc.calcBalance(leases, 'totalCost', 'payments')

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
                <h4>Balance Stats</h4>
                <p>Total Outstanding Balances - ${calcBalance}</p>
            </Card>
        </div>
    )
}

export default (BalanceStats)