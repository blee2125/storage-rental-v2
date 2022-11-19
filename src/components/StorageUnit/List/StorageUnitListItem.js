import React from "react";

function StorageUnitListItem(props) {

    return (
        <tr>
            <td>{props.storageUnit.unitNumber}</td>
        </tr>
    );
}

export default StorageUnitListItem;