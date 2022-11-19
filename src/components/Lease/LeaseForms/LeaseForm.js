import React from "react";
import { Form } from "react-bootstrap";
import LeaseCustomerForm from "./LeaseCustomerForm";
import LeaseStorageUnitForm from "./LeaseStorageUnitForm";

export const LeaseForm = (props) => {

    return (
      <Form >
        <LeaseCustomerForm
          customers={props.customers}
          customerId={props.leaseObject.customerId}
          updateData={props.updateData}
        />
        <LeaseStorageUnitForm
          units={props.units}
          unitId={props.leaseObject.unitId}
          updateData={props.updateData}
        />
        <Form.Group className="mb-3" controlId="formGroupRate">
          <Form.Label>Rate</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Rate" 
            value={props.leaseObject.rate}
            onChange={e => props.updateData('rate', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLength">
          <Form.Label>Length</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Length" 
            value={props.leaseObject.leaseLength}
            onChange={e => props.updateData('leaseLength', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default LeaseForm;