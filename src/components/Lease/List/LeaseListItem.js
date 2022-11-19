import React from "react";
import { connect, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LeaseListItem(props) {
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.lease.customerId)[0])
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === props.lease.unitId)[0])
    let navigate = useNavigate();

    const viewLease = () => {
        let path = `view/${props.lease._id}`
        navigate(path)
    }

    return (
        <tr onClick={()=> viewLease()}>
            <td>{customer.customerName}</td>
            <td>{unit.unitNumber}</td>
            <td>{props.lease.rate}</td>
            <td>{props.lease.leaseLength}</td>
        </tr>
    );
}

export default connect(null, {}) (LeaseListItem);