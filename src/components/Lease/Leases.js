import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { getAllLeases } from "../../reducers/LeaseReducer"
import { getAllCustomers } from "../../reducers/CustomerReducer"
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import LeaseList from "./List/LeaseList";
import LeaseFilter from "./List/LeaseFilter";
import DateFunc from "../../functions/DateFunc";

function Leases(props) {
    const leases = useSelector((state) => state.leaseState.leaseArray)
    const [filter, setFilter] = useState('Current')

    const filterLeases = leases.filter(lease => {
        const pcf = DateFunc.returnPastCurrentFuture(lease.startDate, lease.endDate)
        if (filter === pcf) {
            return lease
        }
        return undefined
    })

    useEffect(() => {
        props.getAllLeases()
        props.getAllCustomers()
        props.getAllStorageUnits()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Leases
            <LeaseFilter
                filter={filter}
                setFilter={setFilter}
            />
            <LeaseList
                leaseArray={filterLeases}
            />
        </div>
    )
}

export default connect(null, { getAllLeases, getAllCustomers, getAllStorageUnits }) (Leases)