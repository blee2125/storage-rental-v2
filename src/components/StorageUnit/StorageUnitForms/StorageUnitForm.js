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
        <Form.Group className="mb-3" controlId="formGroupType">
          <Form.Label>Type</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Type" 
            value={props.storageUnitObject.type}
            onChange={e => props.updateData('type', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupSize">
          <Form.Label>Size</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Size" 
            value={props.storageUnitObject.size}
            onChange={e => props.updateData('size', e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Location" 
            value={props.storageUnitObject.location}
            onChange={e => props.updateData('location', e.target.value)}
          />
        </Form.Group>
      </Form>
    );
}

export default StorageUnitForm;