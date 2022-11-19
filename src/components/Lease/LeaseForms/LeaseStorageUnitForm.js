import React from "react";
import { Form } from "react-bootstrap";

export const LeaseStorageUnitForm = (props) => {

  const listLocations = () => {
    const locations = []
    props.units.forEach((unit) => {
      locations.push(unit.location)
    })
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredLoc = locations.filter(onlyUnique)
    return(filteredLoc)
  }

    const listStorageUnits = props.units.map(unit => {
            return <option value={unit._id} key={unit._id}>{unit.unitNumber}</option>
        })

    return (
      <div>
        <Form.Group className="mb-3" controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Select
            value={props.location || ''}
            onChange={e => props.updateData('unitId', e.target.value)}
          >
            <option value=''></option>
            {listStorageUnits}
          </Form.Select>
        </Form.Group>
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
        {listLocations()}
      </div>
    );
}

export default LeaseStorageUnitForm;