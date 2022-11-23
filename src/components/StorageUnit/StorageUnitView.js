import React from "react";
import { connect, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
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
            <table>
                <tbody>
                <tr>
                    <td>Unit Number</td>
                    <td>{storageUnit.unitNumber}</td>
                </tr>
                <tr>
                    <td>Type</td>
                    <td>{storageUnit.type}</td>
                </tr>
                <tr>
                    <td>Size</td>
                    <td>{storageUnit.size}</td>
                </tr>
                <tr>
                    <td>Location</td>
                    <td>{storageUnit.location}</td>
                </tr>
                <tr>
                    <td>Available</td>
                    <td>{storageUnit.available ? 'Yes' : 'No'}</td>
                </tr>
                </tbody>
            </table>
            
            <button onClick={updateAvailable}>Set Available</button>
            <button onClick={updateUnavailable}>Set Unavailable</button>
            <button onClick={editStorageUnit}>edit</button>

            <LeaseList
                leases={leases}
            />
        </div>
    )
}

export default connect(null, { updateStorageUnit }) (StorageUnitView)