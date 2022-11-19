import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { getAllLeases } from "../../reducers/LeaseReducer"
import { getAllCustomers } from "../../reducers/CustomerReducer"
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import LeaseList from "./List/LeaseList";

function Leases(props) {
    const leases = useSelector((state) => state.leaseState.leaseArray)

    useEffect(() => {
        props.getAllLeases()
        props.getAllCustomers()
        props.getAllStorageUnits()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Leases
            <LeaseList
                leaseArray={leases}
            />
        </div>
    )
}

export default connect(null, { getAllLeases, getAllCustomers, getAllStorageUnits }) (Leases)