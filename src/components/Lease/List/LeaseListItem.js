import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateFunc from '../../../functions/DateFunc'

function LeaseListItem(props) {
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.lease.customerId)[0])
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === props.lease.unitId)[0])
    let navigate = useNavigate();

    const viewLease = () => {
        let path = `view/${props.lease._id}`
        navigate(path)
    }

    const leaseLength = DateFunc.leaseLength(props.lease.startDate, props.lease.endDate)

    return (
        <tr onClick={()=> viewLease()}>
            <td>{unit.unitNumber}</td>
            <td>{customer.name}</td>
            <td>{props.lease.rate}</td>
            <td>{props.lease.totalCost}</td>
            <td>{props.lease.startDate}</td>
            <td>{props.lease.endDate}</td>
            <td>{leaseLength}</td>
        </tr>
    );
}

export default connect(null, {}) (LeaseListItem);