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
                        <td><b>unit</b></td>
                        <td><b>customer</b></td>
                        <td><b>rate</b></td>
                        <td><b>balance</b></td>
                        <td><b>start date</b></td>
                        <td><b>end date</b></td>
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