import React from "react";
import { Table, Card } from "react-bootstrap";
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
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <Table hover>
                <thead>
                    <tr>
                        <td><b>Unit</b></td>
                        <td><b>Customer</b></td>
                        <td><b>Rate</b></td>
                        <td><b>Balance</b></td>
                        <td><b>Start Date</b></td>
                        <td><b>End Date</b></td>
                        <td><b>Length</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listLeases}
                </tbody>
            </Table>
            </Card>
        </div>
    );
}

export default LeaseList;