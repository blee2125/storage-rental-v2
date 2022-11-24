import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateFunc from "../../../functions/DateFunc";

function LeaseListItem(props) {
    let navigate = useNavigate();
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.lease.customerId)[0])

    const cronLease = DateFunc.returnPastCurrentFuture(props.lease.startDate, props.lease.endDate)

    const viewLease = () => {
        let path = `../../leases/view/${props.lease._id}`
        navigate(path)
    }

    const viewCustomer = () => {
        let path = `../../customers/view/${props.lease.customerId}`
        navigate(path)
    }

    return (
        <tr >
            <td onClick={viewLease}>{props.lease.startDate} - {props.lease.endDate}</td>
            <td>{cronLease}</td>
            <td onClick={viewCustomer}>{customer.name}</td>
        </tr>
    );
}

export default LeaseListItem;