import React from "react";
import { Table, Card } from "react-bootstrap";
import PaymentListItem from "./PaymentListItem";

function PaymentList(props) { 
    const listPayments = props.paymentArray.map((payment, index) => {
        return (
            <PaymentListItem 
                payment={payment} 
                key={index} 
                id={payment._id} 
            />
        )
    })

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <Table hover>
                <thead>
                    <tr>
                        <td><b>Date</b></td>
                        <td><b>lease id</b></td>
                        <td><b>customer</b></td>
                        <td><b>payment</b></td>
                    </tr>
                </thead>
                <tbody>
                    {listPayments}
                </tbody>
            </Table>
            </Card>
        </div>
    );
}

export default PaymentList;