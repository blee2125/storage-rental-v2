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

    const daysInMonth = [0,31,28,31,30,31,30,31,31,30,31,30,31]

    const calcTotal = () => {
        const startSplit = leaseObject.startDate.split('-')
        const startYear = Number(startSplit[0])
        const startMonth = Number(startSplit[1])
        const startDay = Number(startSplit[2])
        const endSplit = leaseObject.endDate.split('-')
        const endYear = Number(endSplit[0])
        const endMonth = Number(endSplit[1])
        const endDay = Number(endSplit[2])
        let m = 0
        let d = 0
        const yearDiff = (endYear - startYear) *12
        const monthDiff = endMonth - startMonth
        const dayDiff = endDay - startDay

        m = yearDiff + monthDiff
        if (dayDiff < 0) {
            if (startYear%4 === 0) {
                m = m - 1
                if (startMonth === 2) {
                    d = daysInMonth[startMonth] + dayDiff + 1
                } else {
                    d = daysInMonth[startMonth] + dayDiff
                }
            } else {
                m = m - 1
                d = daysInMonth[startMonth] + dayDiff
            }
        } else {
            d = dayDiff
        }
        let total = 0
        total = (m * leaseObject.rate) + (d * leaseObject.rate / 30)
        leaseObject.totalCost = Number(total).toFixed(2)
    }

    useEffect(() => {
        importKeyValue()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Create Lease
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <LeaseForm
                    customers={customers}
                    units={units}
                    leaseObject={leaseObject}
                    updateData={updateData}
                    calcTotal={calcTotal}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createLease }) (LeaseAdd)