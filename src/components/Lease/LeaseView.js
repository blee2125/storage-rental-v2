import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Table, Card, Button, ButtonGroup } from "react-bootstrap";
import PaymentForm from "../Payment/PaymentForm";
import PaymentList from "../Payment/List/PaymentList";
import DownloadLeasePDF from "./LeasePDF/DownloadLeasePDF";

function LeaseView(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const lease = useSelector((state) => state.leaseState.leaseArray.filter(l => l._id === routeParams.id)[0])
    const customers = useSelector((state) => state.customerState.customerArray)
    const units = useSelector((state) => state.storageUnitState.storageUnitArray)
    const payments = useSelector((state) => state.paymentState.paymentArray)

    const [unit, setUnit] = useState()
    const [paymentArray, setPaymentArray] = useState([])
    const [customer, setCustomer] = useState()
    const [balance, setBalance] = useState()

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
        const paymentData = payments.filter(p=> p.leaseId ===lease._id)
        setUnit(unitData)
        setPaymentArray(paymentData)
        setCustomer(customerData)
        calcBalance()
    }

    function calcBalance() {
        if (lease) {
            let bal = lease.totalCost
            if (lease.payments > 0) {
                bal = bal - lease.payments
            }
            setBalance(bal)
        }
    }

    const downloadpdf = () => {
        DownloadLeasePDF({lease, customer, unit})
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
                    <tr onClick={viewCustomer}>
                        <td>Customer</td>
                        <td>{customer ? customer.name : ''}</td>
                    </tr>
                    <tr onClick={viewUnit}>
                        <td>Unit</td>
                        <td>{unit ? unit.unitNumber : ''}</td>
                    </tr>
                    <tr>
                        <td>Rate</td>
                        <td>{lease ? lease.rate : ''}</td>
                    </tr>
                    <tr>
                        <td>Start Date</td>
                        <td>{lease ? lease.startDate : ''}</td>
                    </tr>
                    <tr>
                        <td>End Date</td>
                        <td>{lease ? lease.endDate : ''}</td>
                    </tr>
                    <tr>
                        <td>Total Cost</td>
                        <td>{lease ? Number(lease.totalCost).toFixed(2) : ''}</td>
                    </tr>
                    <tr>
                        <td>Remaining Balance</td>
                        <td>{balance ? Number(balance).toFixed(2) : '0.00'}</td>
                    </tr>
                    </tbody>
                </Table>
                <ButtonGroup>
                    <Button onClick={editLease}>Edit</Button>
                    <PaymentForm lease={lease}/>
                    <Button onClick={downloadpdf}>Download PDF</Button>
                </ButtonGroup>
            </Card>
            {paymentArray.length > 0 ?
            <PaymentList
                paymentArray={paymentArray}
            /> : ''}
        </div>
    )
}

export default (LeaseView)