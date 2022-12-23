import React from "react";
import { Table, Card } from "react-bootstrap";
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
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px", minWidth: '600px'}}>
            {props.newLeaseButton}
            {listLeases.length > 0 ?
            <Table hover>
                <thead>
                    <tr>
                        <td><b>Unit Number</b></td>
                        <td><b>Start Date</b></td>
                        <td><b>End Dates</b></td>
                        <td><b>Length</b></td>
                        <td><b>Balance</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listLeases}
                </tbody>
            </Table>
            : <h3>No Leases</h3>}
            </Card>
        </div>
    );
}

export default LeaseList;