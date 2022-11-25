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

    return (
        <div>
            <Card bg='light' border="secondary" style={{ width: '350px', padding: '25px', margin: "25px"}}>
            <Table hover>
                <tbody>
                    <tr>
                        <td>
                            Name
                        </td>
                        <td>
                            {customer ? customer.name : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                        </td>
                        <td>
                            {customer ? customer.email : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone
                        </td>
                        <td>
                            {customer ? customer.phone : ''}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            # of Leases
                        </td>
                        <td>
                            {leases ? leases.length : ''}
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