import React from "react";
import { Table, Card } from "react-bootstrap";
import StorageUnitListItem from "./StorageUnitListItem";

function StorageUnitList(props) { 
    const listUnits = props.unitsArray.map((unit, index) => {
        return (
            <StorageUnitListItem 
                storageUnit={unit} 
                key={index} 
                id={unit._id} 
            />
        )
    })

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <Table hover>
                <thead>
                    <tr>
                        <td><b>Unit Number</b></td>
                        <td><b>Type</b></td>
                        <td><b>Size</b></td>
                        <td><b>Location</b></td>
                        <td><b>Standard Rate</b></td>
                        <td><b>Available</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listUnits}
                </tbody>
            </Table>
            </Card>
        </div>
    );
}

export default StorageUnitList;