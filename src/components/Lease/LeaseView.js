import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Table, Card, Button } from "react-bootstrap";

function LeaseView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const lease = useSelector((state) => state.leaseState.leaseArray.filter(l => l._id === routeParams.id)[0])
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === lease.customerId)[0])
    const unit = useSelector((state) => state.storageUnitState.storageUnitArray.filter(u => u._id === lease.unitId)[0])

    function editLease() {
        let path = `../edit/${lease._id}`
        navigate(path)
    }

    function viewCustomer() {
        let path = `../../customers/view/${customer._id}`
        navigate(path)
    }

    function viewUnit() {
        let path = `../../storage-units/view/${unit._id}`
        navigate(path)
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <Table hover>
                <tbody>
                <tr onClick={viewUnit}>
                    <td>unit</td>
                    <td>{unit.unitNumber}</td>
                </tr>
                <tr onClick={viewCustomer}>
                    <td>customer</td>
                    <td>{customer.name}</td>
                </tr>
                <tr>
                    <td>rate</td>
                    <td>{lease.rate}</td>
                </tr>
                <tr>
                    <td>start date</td>
                    <td>{lease.startDate}</td>
                </tr>
                <tr>
                    <td>end date</td>
                    <td>{lease.endDate}</td>
                </tr>
                </tbody>
            </Table>
            </Card>
            <Button onClick={editLease}>edit</Button>
        </div>
    )
}

export default (LeaseView)