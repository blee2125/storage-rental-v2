import React from "react";
import { useSelector } from "react-redux";

function CustomerStats() {
    const customers = useSelector((state) => state.customerState.customerArray)

    return (
        <div>
            customer stats
            <p>Total Customers - {customers.length}</p>
        </div>
    )
}

export default (CustomerStats)