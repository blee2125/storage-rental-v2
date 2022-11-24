import React from "react";
import { useSelector } from "react-redux";

function UnitStats() {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    let totalLeases = 0
    let totalAvailable = 0

    units.forEach(unit => {
        if (unit.available) {
            totalAvailable = totalAvailable + 1
        } else {
            totalLeases = totalLeases + 1
        }
    });

    return (
        <div>
            unit stats
            <p>Total Units - {units.length}</p>
            <p>Total Leases - {totalLeases}</p>
            <p>Total Available - {totalAvailable}</p>
        </div>
    )
}

export default (UnitStats)