import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap"
import { getAllStorageUnits } from "../../reducers/StorageUnitReducer"
import StorageUnitList from "./List/StorageUnitList";
import StorageUnitSearch from "./List/Filters/StorageUnitSearch";
import AvailableFilter from "./List/Filters/AvailableFilter";
import TypeFilter from "./List/Filters/TypeFilter";
import SizeFilter from "./List/Filters/SizeFilter";

function StorageUnits(props) {
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [search, setSearch] = useState('')
    const [availableFilter, setAvailableFilter] = useState('')
    const [typeFilter, setTypeFilter] = useState('')
    const [sizeFilter, setSizeFilter] = useState('')

    const filterUnits = units.filter(unit => {
        if (search === '') {
            return unit
        }
        if (unit.unitNumber.toLowerCase().includes(search.toLowerCase())) {
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

    const filterType = filterAvailable.filter(unit => {
        if (typeFilter === '') {
            return unit
        } else if (typeFilter === 'Self Storage') {
            if (unit.type === 'Self Storage') {
                return unit
            }
        } else if (typeFilter === 'Vehicle') {
            if (unit.type === 'Vehicle') {
                return unit
            }
        }
        return undefined
    })

    const filterSize = filterType.filter(unit => {
        if (sizeFilter === '') {
            return unit
        } else {
            if (unit.size === sizeFilter) {
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
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Storage Units</h2>
                <StorageUnitSearch
                    search={search}
                    setSearch={setSearch}
                />
                <Row>
                    <Col>
                        <TypeFilter
                            typeFilter={typeFilter}
                            setTypeFilter={setTypeFilter}
                        />
                    </Col>
                    <Col>
                        <SizeFilter
                            sizeFilter={sizeFilter}
                            setSizeFilter={setSizeFilter}
                        />
                    </Col>
                    <Col>
                        <AvailableFilter
                            availableFilter={availableFilter}
                            setAvailableFilter={setAvailableFilter}
                        />
                    </Col>
                </Row>
            </Card>
            <StorageUnitList
                unitsArray={filterSize}
            />
        </div>
    )
}

export default connect(null, { getAllStorageUnits }) (StorageUnits)