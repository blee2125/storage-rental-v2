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
            {storageUnit.unitNumber}
            <button onClick={editStorageUnit}>edit</button>
        </div>
    )
}

export default (StorageUnitView)