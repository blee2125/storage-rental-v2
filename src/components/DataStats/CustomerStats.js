import React from "react";
import { useSelector } from "react-redux";
import { Card } from "react-bootstrap";

function CustomerStats() {
    const customers = useSelector((state) => state.customerState.customerArray)

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "5px"}}>
                <h4>Customer Stats</h4>
                <p>Total Customers - {customers.length}</p>
            </Card>
        </div>
    )
}

export default (CustomerStats)