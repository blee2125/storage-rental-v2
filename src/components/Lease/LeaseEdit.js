import React, {useState, useEffect} from "react";
import { Button } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { updateLease } from "../../reducers/LeaseReducer"
import LeaseForm from "./LeaseForms/LeaseForm";
import { useParams, useNavigate } from "react-router-dom";

function LeaseEdit(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const lease = useSelector((state) => state.leaseState.leaseArray.filter(l => l._id === routeParams.id)[0])
    const customers = useSelector((state) => state.customerState.customerArray)
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const [leaseObject, setLeaseObject] = useState({
        unitId: '',
        customerId: '',
        rate: '',
        leaseLength: ''
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
        props.updateLease({id: lease._id, data: leaseObject})
        .unwrap()
        .then((data) => {
            console.log(data)
            navigate(`/leases/view/${data._id}`)
        })
        .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        setLeaseObject(leaseObject => ({
            ...leaseObject,
            ...lease
        }))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Edit Lease
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

export default connect(null, { updateLease }) (LeaseEdit)