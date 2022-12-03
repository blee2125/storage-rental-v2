import React, {useState, useEffect} from "react";
import { Button, Card } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { createLease } from "../../../reducers/LeaseReducer"
import LeaseForm from "./LeaseForm";
import { useLocation, useNavigate } from "react-router-dom";

function LeaseAdd(props) {
    let navigate = useNavigate();
    const {state} = useLocation();
    const id = state;
    const customers = useSelector((state) => state.customerState.customerArray)
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [leaseObject, setLeaseObject] = useState({
        unitId: '',
        customerId: '',
        rate: '',
        totalCost: '',
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
            navigate(`/leases/view/${data._id}`)
        })
        .catch((e) => {console.log(e)});
    }

    const importKeyValue = () => {
        if (id) {
            updateData(id[0], id[1])
        }
    }

    useEffect(() => {
        importKeyValue()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Create Lease</h2>
                <LeaseForm
                    customers={customers}
                    units={units}
                    leaseObject={leaseObject}
                    updateData={updateData}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createLease }) (LeaseAdd)