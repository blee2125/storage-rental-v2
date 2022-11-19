import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import StorageUnitList from "./List/StorageUnitList";

function StorageUnits(props) {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)

    useEffect(() => {
        props.getAllStorageUnits()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            storage unit
            <StorageUnitList
                unitsArray={units}
            />
        </div>
    )
}

export default connect(null, { getAllStorageUnits }) (StorageUnits)