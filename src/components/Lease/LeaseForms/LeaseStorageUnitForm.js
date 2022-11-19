import React from "react";
import { Form } from "react-bootstrap";

export const LeaseStorageUnitForm = (props) => {

    const listStorageUnits = props.units.map(unit => {
            return <option value={unit._id} key={unit._id}>{unit.unitNumber}</option>
        })

    return (
        <Form.Group className="mb-3" controlId="formGroupUnit">
          <Form.Label>Unit</Form.Label>
          <Form.Select
            value={props.unitId || ''}
            onChange={e => props.updateData('unitId', e.target.value)}
          >
            <option value=''></option>
            {listStorageUnits}
          </Form.Select>
        </Form.Group>
    );
}

export default LeaseStorageUnitForm;