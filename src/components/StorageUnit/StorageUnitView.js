import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button, ButtonGroup, Card, Table } from "react-bootstrap"
import LeaseList from "./List/LeaseList";
import { updateStorageUnit } from "../../reducers/StorageUnitReducer";

function StorageUnitView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const storageUnit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === routeParams.id)[0])
    const leases = useSelector((state) => state.leaseState.leaseArray.filter(l => l.unitId === routeParams.id))

    function editStorageUnit() {
        let path = `../edit/${storageUnit._id}`
        navigate(path)
    }

    function updateAvailable() {
        props.updateStorageUnit({id: storageUnit._id, data: {...storageUnit, available: true}})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    function updateUnavailable() {
        props.updateStorageUnit({id: storageUnit._id, data: {...storageUnit, available: false}})
        .unwrap()
        .then((data) => {})
        .catch((e) => {console.log(e)});
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            {storageUnit ? 
            <div>
            <Table hover>
                <tbody>
                <tr>
                    <td><b>Unit Number</b></td>
                    <td>{storageUnit.unitNumber}</td>
                </tr>
                <tr>
                    <td><b>Type</b></td>
                    <td>{storageUnit.type}</td>
                </tr>
                <tr>
                    <td><b>Size</b></td>
                    <td>{storageUnit.size}</td>
                </tr>
                <tr>
                    <td><b>Location</b></td>
                    <td>{storageUnit.location}</td>
                </tr>
                <tr>
                    <td><b>Standard Rate</b></td>
                    <td>{storageUnit.standardRate}</td>
                </tr>
                <tr>
                    <td><b>Available</b></td>
                    <td>{storageUnit.available ? 'Yes' : 'No'}</td>
                </tr>
                </tbody>
            </Table>
            <ButtonGroup>
                <Button onClick={updateAvailable}>Set Available</Button>
                <Button onClick={updateUnavailable}>Set Unavailable</Button>
                <Button onClick={editStorageUnit}>Edit Unit</Button>
            </ButtonGroup>
            </div>
            : ''}
            </Card>
            
            {storageUnit ? <LeaseList
                leases={leases}
            /> : ''}
        </div>
    )
}

export default connect(null, { updateStorageUnit }) (StorageUnitView)