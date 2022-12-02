import React from "react";
import { useNavigate } from "react-router-dom";

function CustomerListItem(props) {
    let navigate = useNavigate();

    const viewCustomer = () => {
        const customerToView = props.customer
        let path = `view/${props.customer._id}`
        navigate(path, {state: {customerToView}})
    }

    const formatPhone = () => {
        const phone = props.customer.phone
        const p = phone.split('')
        const reformat = '('+p[0]+p[1]+p[2]+') '+p[3]+p[4]+p[5]+'-'+p[6]+p[7]+p[8]+p[9]
        return reformat
    }

    return (
        <tr onClick={()=> viewCustomer()}>
            <td>{props.customer.name}</td>
            <td>{props.customer.email}</td>
            <td>{formatPhone()}</td>
        </tr>
    );
}

export default CustomerListItem;