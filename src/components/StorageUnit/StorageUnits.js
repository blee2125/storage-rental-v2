import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import StorageUnitList from "./List/StorageUnitList";
import StorageUnitSearch from "./List/StorageUnitSearch";
import AvailableFilter from "./List/AvailableFilter";
import { Card } from "react-bootstrap"

function StorageUnits(props) {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [search, setSearch] = useState('')
    const [availableFilter, setAvailableFilter] = useState('')

    const filterUnits = units.filter(unit => {
        if (search === '') {
            return unit
        }
        if (unit.unitNumber.toLowerCase().includes(search.toLowerCase())) {
            return unit
        } else if (unit.type.toLowerCase().includes(search.toLowerCase())) {
            return unit
        } else if (unit.size.toLowerCase().includes(search.toLowerCase())) {
            return unit
        } else if (unit.location.toLowerCase().includes(search.toLowerCase())) {
            return unit
        }
        return undefined
    })

    const filterAvailable = filterUnits.filter(unit => {
        if (availableFilter === '') {
            return unit
        } else if (availableFilter === 'available') {
            if (unit.available === true) {
                return unit
            }
        } else if (availableFilter === 'notAvailable') {
            if (unit.available === false) {
                return unit
            }
        }
        return undefined
    })

    useEffect(() => {
        props.getAllStorageUnits()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            storage unit
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <StorageUnitSearch
                    search={search}
                    setSearch={setSearch}
                />
                <AvailableFilter
                    availableFilter={availableFilter}
                    setAvailableFilter={setAvailableFilter}
                />
            </Card>
            <StorageUnitList
                unitsArray={filterAvailable}
            />
        </div>
    )
}

export default connect(null, { getAllStorageUnits }) (StorageUnits)