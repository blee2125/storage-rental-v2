import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card, Table } from "react-bootstrap"
import LeaseList from './List/LeaseList'

function CustomerView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === routeParams.id)[0])
    const leases = useSelector((state) => state.leaseState.leaseArray.filter(l => l.customerId === routeParams.id))

    function editCustomer() {
        let path = `../edit/${customer._id}`
        navigate(path)
    }

    function leaseForm() {
        let path = `../../leases/add`
        navigate(path, {state: ['customerId', customer._id]})
    }

    function calcBalance() {
        let balance = 0
        leases.forEach(lease => {
            balance = balance + lease.totalCost - lease.payments
        })
        return Number(balance).toFixed(2)
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '350px', padding: '25px', margin: "25px"}}>
            <Table hover>
                <tbody>
                    <tr>
                        <td>
                            <b>Name</b>
                        </td>
                        <td>
                            {customer ? customer.name : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Email</b>
                        </td>
                        <td>
                            {customer ? customer.email : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Phone</b>
                        </td>
                        <td>
                            {customer ? customer.phone : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b># of Leases</b>
                        </td>
                        <td>
                            {leases ? leases.length : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Balance</b>
                        </td>
                        <td>
                            {leases ? calcBalance() : ''}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={editCustomer}>Edit</Button>
            </Card>

            <Button onClick={leaseForm}>New Lease</Button>

            <LeaseList
                leases={leases}
            />
            
        </div>
    )
}

export default (CustomerView)