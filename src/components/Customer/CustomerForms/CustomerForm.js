import React from "react";
import { Form } from "react-bootstrap";
import PhoneInput from 'react-phone-input-2'

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
          type="email" 
          placeholder="Email"
          required
          value={props.customerObject.email}
          onChange={e => props.updateData('email', e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPhone">
        <Form.Label>Phone</Form.Label>
        <PhoneInput
          disableCountryCode={true}
          specialLabel=''
          placeholder="(123) 456-7890"
          value={props.customerObject.phone}
          onChange={phone => props.updateData('phone', phone)}
        />
      </Form.Group>
    </Form>
  );
}

export default CustomerForm;