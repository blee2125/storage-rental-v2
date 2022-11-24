import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { getAllLeases } from "../../reducers/LeaseReducer"
import { getAllCustomers } from "../../reducers/CustomerReducer"
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import LeaseList from "./List/LeaseList";
import LeaseFilter from "./List/LeaseFilter";

function Leases(props) {
    const leases = useSelector((state) => state.leaseState.leaseArray)
    const [filter, setFilter] = useState('Current')

    const filterPastCurrentFuture = (startDate, endDate) => {
        const startSplit = startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        const today = new Date()
        const todayYear = today.getFullYear()
        const todayMonth = today.getMonth() + 1
        const todayDay = today.getDate()
        if (endYear < todayYear) {
            return 'Past' //past year
        }  else if (startYear > todayYear) {
            return 'Future' //fut year
        } else {
            if (endMonth < todayMonth) {
                return 'Past' //cur year, past month
            } else if (endMonth === todayMonth) {
                if (endDay < todayDay) {
                    return 'Past' //cur year, cur month, past day
                }
            }
            if (startMonth > todayMonth) {
                return 'Future' //fut month
            } else if (startMonth === todayMonth) {
                if (startDay > todayDay) {
                    return 'Future' //cur month, fut day
                }
            }
            return 'Current'
        }
    }

    const filterLeases = leases.filter(lease => {
        const pcf = filterPastCurrentFuture(lease.startDate, lease.endDate)
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