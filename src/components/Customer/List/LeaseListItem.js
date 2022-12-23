import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CalcFunc from "../../../functions/CalcFunc";
import DateFunc from "../../../functions/DateFunc";

function LeaseListItem(props) {
    let navigate = useNavigate();
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === props.lease.unitId)[0])

    const leaseLength = DateFunc.leaseLength(props.lease.startDate, props.lease.endDate)

    // const viewStorageUnit = () => {
    //     let path = `../../storage-units/view/${unit._id}`
    //     navigate(path)
    // }

    const viewLease = () => {
        let path = `../../leases/view/${props.lease._id}`
        navigate(path)
    }

    const calcBalance = CalcFunc.calcBalance([props.lease], 'totalCost', 'payments')

    return (
        <tr onClick={viewLease}>
            <td>{unit ? unit.unitNumber : ''}</td>
            <td>{DateFunc.monthDayYear(props.lease.startDate)}</td>
            <td>{DateFunc.monthDayYear(props.lease.endDate)}</td>
            <td>{leaseLength}</td>
            <td >{props.lease.totalCost ? calcBalance : ''}</td>
        </tr>
    );
}

export default LeaseListItem;