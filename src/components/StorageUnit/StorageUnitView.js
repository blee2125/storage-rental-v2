import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function StorageUnitView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const storageUnit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === routeParams.id)[0])

    function editStorageUnit() {
        let path = `../edit/${storageUnit._id}`
        navigate(path)
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
                </tbody>
            </table>
            
            <button onClick={editStorageUnit}>edit</button>
        </div>
    )
}

export default (StorageUnitView)