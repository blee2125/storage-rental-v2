import React from "react";
import { useNavigate } from "react-router-dom";

function CustomerListItem(props) {
    let navigate = useNavigate();

    const viewCustomer = () => {
        const customerToView = props.customer
        let path = `view/${props.customer._id}`
        navigate(path, {state: {customerToView}})
    }

    return (
        <tr onClick={()=> viewCustomer()}>
            <td>{props.customer.customerName}</td>
        </tr>
    );
}

export default CustomerListItem;