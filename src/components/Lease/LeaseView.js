import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Table, Card, Button } from "react-bootstrap";
import PaymentForm from "./LeaseForms/PaymentForm";

function LeaseView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const lease = useSelector((state) => state.leaseState.leaseArray.filter(l => l._id === routeParams.id)[0])
    const customers = useSelector((state) => state.customerState.customerArray)
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)

    const [unit, setUnit] = useState()
    const [customer, setCustomer] = useState()

    function editLease() {
        let path = `../edit/${lease._id}`
        navigate(path)
    }

    function viewCustomer() {
        let path = `../../customers/view/${lease.customerId}`
        navigate(path)
    }

    function viewUnit() {
        let path = `../../storage-units/view/${lease.unitId}`
        navigate(path)
    }

    function loadData() {
        const customerData = customers.filter(c=> c._id===lease.customerId)[0]
        const unitData = units.filter(u=> u._id===lease.unitId)[0]
        setUnit(unitData)
        setCustomer(customerData)
    }

    useEffect(() => {
        loadData()
        // eslint-disable-next-line
    }, [lease])

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Lease</h2>
            <Table hover>
                <tbody>
                <tr onClick={viewUnit}>
                    <td>unit</td>
                    <td>{unit ? unit.unitNumber : ''}</td>
                </tr>
                <tr onClick={viewCustomer}>
                    <td>customer</td>
                    <td>{customer ? customer.name : ''}</td>
                </tr>
                <tr>
                    <td>rate</td>
                    <td>{lease ? lease.rate : ''}</td>
                </tr>
                <tr>
                    <td>start date</td>
                    <td>{lease ? lease.startDate : ''}</td>
                </tr>
                <tr>
                    <td>end date</td>
                    <td>{lease ? lease.endDate : ''}</td>
                </tr>
                <tr>
                    <td>balance</td>
                    <td>{lease ? Number(lease.totalCost - lease.payments).toFixed(2) : ''}</td>
                </tr>
                </tbody>
            </Table>
            </Card>
            <Button onClick={editLease}>edit</Button>
            <PaymentForm lease={lease}/>
        </div>
    )
}

export default (LeaseView)