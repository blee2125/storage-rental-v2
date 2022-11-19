import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

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

    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td>unit</td>
                    <td>{customer.customerName}</td>
                </tr>
                <tr>
                    <td>customer</td>
                    <td>{unit.unitNumber}</td>
                </tr>
                <tr>
                    <td>rate</td>
                    <td>{lease.rate}</td>
                </tr>
                <tr>
                    <td>lenght</td>
                    <td>{lease.leaseLength}</td>
                </tr>
                </tbody>
            </table>
            
            <button onClick={editLease}>edit</button>
        </div>
    )
}

export default (LeaseView)