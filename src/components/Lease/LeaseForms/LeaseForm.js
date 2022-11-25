import React, {useEffect} from "react";
import { Form } from "react-bootstrap";
import LeaseCustomerForm from "./LeaseCustomerForm";
import LeaseStorageUnitForm from "./LeaseStorageUnitForm";
import CalcFunc from "../../../functions/CalcFunc";

export const LeaseForm = (props) => {
  const calcTotal = () => {
    let t = CalcFunc.calcTotal(props.leaseObject.startDate, props.leaseObject.endDate, props.leaseObject.rate)
    props.updateData('totalCost', t)
  }
  
  useEffect(() => {
    calcTotal()
    // eslint-disable-next-line
}, [props.leaseObject.rate, props.leaseObject.startDate, props.leaseObject.endDate])

  return (
    <div>
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
      <Form.Group className="mb-3" controlId="formGroupStart">
        <Form.Label>Start Date</Form.Label>
        <Form.Control 
          type="date" 
          placeholder="Start"
          max={props.leaseObject.endDate}
          value={props.leaseObject.startDate}
          onChange={e => props.updateData('startDate', e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupEnd">
        <Form.Label>End Date</Form.Label>
        <Form.Control 
          type="date" 
          placeholder="end" 
          min={props.leaseObject.startDate}
          value={props.leaseObject.endDate}
          onChange={e => props.updateData('endDate', e.target.value)}
        />
      </Form.Group>
      
    </Form>
    Total Cost $ {props.leaseObject.totalCost > 0 ? props.leaseObject.totalCost : 0}
    </div>
  );
}

export default LeaseForm;