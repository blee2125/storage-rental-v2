import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LeaseList from './List/LeaseList'
import { Button, Card, Table } from "react-bootstrap"

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
                            {customer.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                        </td>
                        <td>
                            {customer.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone
                        </td>
                        <td>
                            {customer.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            # of Leases
                        </td>
                        <td>
                            {leases.length}
                        </td>
                    </tr>
                </tbody>
            </Table>
            </Card>

            <Button onClick={editCustomer}>edit</Button>
            <Button onClick={leaseForm}>lease</Button>

            <LeaseList
                leases={leases}
            />
            
        </div>
    )
}

export default (CustomerView)