import React from "react";
import { useNavigate } from "react-router-dom";

function StorageUnitListItem(props) {
    let navigate = useNavigate();

    const viewStorageUnit = () => {
        let path = `view/${props.storageUnit._id}`
        navigate(path)
    }

    return (
        <tr onClick={()=> viewStorageUnit()}>
            <td>{props.storageUnit.unitNumber}</td>
        </tr>
    );
}

export default StorageUnitListItem;