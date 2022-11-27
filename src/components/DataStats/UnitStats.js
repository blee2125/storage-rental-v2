import React from "react";
import { useSelector } from "react-redux";
import DateFunc from "../../functions/DateFunc";
import { Card } from 'react-bootstrap';

function UnitStats() {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const leases = useSelector((state) => state.leaseState.leaseArray)
    let currentLeases = 0
    let futureLeases = 0

    leases.forEach(l => {
        const pcf = DateFunc.returnPastCurrentFuture(l.startDate, l.endDate)
        if (pcf === 'Current') {
            currentLeases = currentLeases + 1
        } else if (pcf === 'Future') {
            futureLeases = futureLeases + 1
        }
    })

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '300px', padding: '25px', margin: "25px"}}>
            <p>Total Units - {units.length}</p>
            <p>Current Leases - {currentLeases}</p>
            <p>Upcoming Leases - {futureLeases}</p>
            </Card>
        </div>
    )
}

export default (UnitStats)