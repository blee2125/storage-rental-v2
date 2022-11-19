import React from "react";
import { Form } from "react-bootstrap";

export const LeaseCustomerForm = (props) => {

    const listCustomers = props.customers.map(customer => {
            return <option value={customer._id} key={customer._id}>{customer.name}</option>
        })

    return (
        <Form.Group className="mb-3" controlId="formGroupCustomer">
          <Form.Label>Customer</Form.Label>
          <Form.Select
            value={props.customerId || ''}
            onChange={e => props.updateData('customerId', e.target.value)}
          >
            <option value=''></option>
            {listCustomers}
          </Form.Select>
        </Form.Group>
    );
}

export default LeaseCustomerForm;