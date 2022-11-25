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
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <Table hover>
                <thead>
                    <tr>
                        <td><b>lease id</b></td>
                        <td><b>Unit Number</b></td>
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