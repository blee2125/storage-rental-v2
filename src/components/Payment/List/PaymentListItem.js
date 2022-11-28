import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DateFunc from "../../../functions/DateFunc";

function PaymentListItem(props) {
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === props.payment.customerId)[0])
    const lease = useSelector((state) => state.leaseState.leaseArray.filter(l => l._id === props.payment.leaseId)[0])
    let navigate = useNavigate();

    const viewLease = () => {
        let path = `../../leases/view/${props.payment.leaseId}`
        navigate(path)
    }

    return (
        <tr >
            <td>{props.payment.date ? DateFunc.monthDayYear(props.payment.date) : ''}</td>
            <td onClick={()=> viewLease()}>{lease ? lease._id : ''}</td>
            <td>{customer ? customer.name : ''}</td>
            <td>{props.payment.payment}</td>
        </tr>
    );
}

export default (PaymentListItem);