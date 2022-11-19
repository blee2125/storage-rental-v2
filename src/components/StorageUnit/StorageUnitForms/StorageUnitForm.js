import React from "react";
import { Form } from "react-bootstrap";

export const StorageUnitForm = (props) => {

    return (
      <Form >
        <Form.Group className="mb-3" controlId="formGroupUnitNumber">
          <Form.Label>Unit Number</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Unit Number" 
            value={props.storageUnitObject.unitNumber}
            onChange={e => props.updateData('unitNumber', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default StorageUnitForm;