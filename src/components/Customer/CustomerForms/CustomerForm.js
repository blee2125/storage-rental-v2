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
            value={props.customerObject.customerName}
            onChange={e => props.updateData('customerName', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default CustomerForm;