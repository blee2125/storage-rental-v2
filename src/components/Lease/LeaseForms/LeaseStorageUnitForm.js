import React, {useState, useEffect} from "react";
import { Form } from "react-bootstrap";

export const LeaseStorageUnitForm = (props) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState('');  
  const [sizeArray, setSizeArray] = useState([]);
  const [size, setSize] = useState('');
  const [units] = useState(props.units)

  const uniqueLocations = () => {
    const locFilter = []
    props.units.forEach((unit) => {
      locFilter.push(unit.location)
    })
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredLoc = locFilter.filter(onlyUnique)
    setLocations(filteredLoc)
  }
  
  const mapLocations = locations.map((loc, index) => {
    return <option value={loc} key={index}>{loc}</option>
  })

  const uniqueSize = () => {
    const sizeFilter = []
    props.units.forEach((unit) => {
      sizeFilter.push(unit.size)
    })
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    const filteredSize = sizeFilter.filter(onlyUnique)
    setSizeArray(filteredSize)
  }

  const mapSize = sizeArray.map((s, index) => {
    return <option value={s} key={index}>{s}</option>
  })

  const listStorageUnits = units.filter(unit => unit.location === location)
    .filter(unit => unit.size === size)
    .map(unit => {
      if (unit.available === false) {
        return <option value={unit._id} key={unit._id} >{unit.unitNumber} - {unit.available ? 'available' : 'not available'}</option>
      } else {
        return <option value={unit._id} key={unit._id}>{unit.unitNumber} - {unit.available ? 'available' : 'not available'}</option>
      }
  })

  const u = units.filter(unit => {
    if (unit._id === props.unitId) {
      return unit
    } else {
      return undefined
    }
  })

  const setEditUnit = () => {
    setLocation(u[0].location)
    setSize(u[0].size)
  }
  
  useEffect(() => {
    uniqueLocations()
    uniqueSize()
    if (props.unitId !== '') {
      setEditUnit()
    }
    
    // eslint-disable-next-line
  }, [props])

    return (
      <div>
        <Form.Group className="mb-3" controlId="formGroupLocation">
          <Form.Label>Location</Form.Label>
          <Form.Select
            value={location || ''}
            onChange={e => setLocation(e.target.value)}
          >
            <option value=''></option>
            {mapLocations}
          </Form.Select>
        </Form.Group>
        {location === '' ? '' : 
        <Form.Group className="mb-3" controlId="formGroupSize">
          <Form.Label>Size</Form.Label>
          <Form.Select
            value={size || ''}
            onChange={e => setSize(e.target.value)}
          >
            <option value=''></option>
            {mapSize}
          </Form.Select>
        </Form.Group>}
        {size === '' ? '' :
        <Form.Group className="mb-3" controlId="formGroupUnit">
          <Form.Label>Unit</Form.Label>
          <Form.Select
            value={props.unitId || ''}
            onChange={e => props.updateData('unitId', e.target.value)}
          >
            <option value=''></option>
            {listStorageUnits}
          </Form.Select>
        </Form.Group>}
        
      </div>
    );
}

export default LeaseStorageUnitForm;