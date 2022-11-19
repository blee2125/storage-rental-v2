import React from "react";
import { Table } from "react-bootstrap";
import LeaseListItem from "./LeaseListItem";

function LeaseList(props) { 
    const listLeases = props.leaseArray.map((lease, index) => {
        return (
            <LeaseListItem 
                lease={lease} 
                key={index} 
                id={lease._id} 
            />
        )
    })

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                        <td><b>unit</b></td>
                        <td><b>customer</b></td>
                        <td><b>rate</b></td>
                        <td><b>lease length</b></td>
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