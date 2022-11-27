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

    const calcBalance = () => {
        if (props.lease.payments > 0) {
            return Number(props.lease.totalCost - props.lease.payments).toFixed(2)
        } else {
            return Number(props.lease.totalCost).toFixed(2)
        }
    }

    return (
        <tr>
            <td onClick={viewLease}>{props.lease._id}</td>
            <td onClick={viewStorageUnit}>{unit ? unit.unitNumber : ''}</td>
            <td >{props.lease.totalCost ? calcBalance() : ''}</td>
        </tr>
    );
}

export default LeaseListItem;