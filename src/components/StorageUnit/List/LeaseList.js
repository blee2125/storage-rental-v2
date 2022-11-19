import React from "react";
import { Table } from "react-bootstrap";
import LeaseListItem from "./LeaseListItem";

function LeaseList(props) { 
    const listLeases = props.leases.map((lease) => {
        return (
            <LeaseListItem 
                lease={lease} 
                key={lease._id} 
                id={lease._id} 
            />
        )
    })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td><b>Lease</b></td>
                        <td><b>Customer</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listLeases}
                </tbody>
            </Table>
        </div>
    );
}

export default LeaseList;