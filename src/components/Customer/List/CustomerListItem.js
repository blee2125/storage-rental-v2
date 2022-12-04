import React from "react";
import { useNavigate } from "react-router-dom";
import FormatFunc from "../../../functions/FormatFunc";

function CustomerListItem(props) {
    let navigate = useNavigate();

    const viewCustomer = () => {
        const customerToView = props.customer
        let path = `view/${props.customer._id}`
        navigate(path, {state: {customerToView}})
    }

    const formatPhone = FormatFunc.formatPhone(props.customer.phone)

    return (
        <tr onClick={()=> viewCustomer()}>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{formatPhone}</td>
        </tr>
    );
}

export default CustomerListItem;