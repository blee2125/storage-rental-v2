import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { createLease } from "../../reducers/LeaseReducer"
import LeaseForm from "./LeaseForms/LeaseForm";
import { getAllStorageUnits } from '../../reducers/StorageUnitReducer'
import { getAllCustomers } from '../../reducers/CustomerReducer'

function LeaseAdd(props) {
    const customers = useSelector((state) => state.customerState.customerArray)
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [leaseObject, setLeaseObject] = useState({
        unitId: '',
        customerId: '',
        rate: '',
        startDate: '',
        endDate: ''
    });

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setLeaseObject(leaseObject => ({
            ...leaseObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        props.createLease(leaseObject)
        .unwrap()
        .then((data) => {
            console.log(data)
        })
        .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        props.getAllStorageUnits()
        props.getAllCustomers()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Create Lease
            <LeaseForm
                customers={customers}
                units={units}
                leaseObject={leaseObject}
                updateData={updateData}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createLease, getAllCustomers, getAllStorageUnits }) (LeaseAdd)