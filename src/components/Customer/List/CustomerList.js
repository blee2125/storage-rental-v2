import React from "react";
import { Table } from "react-bootstrap";
import CustomerListItem from "./CustomerListItem";

function CustomerUnitList(props) { 
    const listCustomers = props.customerArray.map((customer, index) => {
        return (
            <CustomerListItem 
                customer={customer} 
                key={index} 
                id={customer._id} 
            />
        )
    })

    return (
        <div>
            <Table hover>
                <thead>
                    <tr>
                        <td><b>Name</b></td>
                        <td><b>Email</b></td>
                        <td><b>Phone</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listCustomers}
                </tbody>
            </Table>
        </div>
    );
}

export default CustomerUnitList;