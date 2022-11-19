import React from "react";
import { Form } from "react-bootstrap";

export const CustomerForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupName">
          <Form.Label>Name</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Name" 
            value={props.customerObject.name}
            onChange={e => props.updateData('name', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Email" 
            value={props.customerObject.email}
            onChange={e => props.updateData('email', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPhone">
          <Form.Label>Phone</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Phone" 
            value={props.customerObject.phone}
            onChange={e => props.updateData('phone', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default CustomerForm;