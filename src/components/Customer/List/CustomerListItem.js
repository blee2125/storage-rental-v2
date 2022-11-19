import React from "react";

function CustomerListItem(props) {

    return (
        <tr>
            <td>{props.customer.customerName}</td>
        </tr>
    );
}

export default CustomerListItem;