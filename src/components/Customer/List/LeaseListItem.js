import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function LeaseListItem(props) {
    let navigate = useNavigate();
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === props.lease.unitId)[0])

    const viewStorageUnit = () => {
        let path = `../../storage-units/view/${unit._id}`
        navigate(path)
    }

    const viewLease = () => {
        let path = `../../leases/view/${props.lease._id}`
        navigate(path)
    }

    return (
        <tr>
            <td onClick={viewLease}>{props.lease._id}</td>
            <td onClick={viewStorageUnit}>{unit.unitNumber}</td>
        </tr>
    );
}

export default LeaseListItem;