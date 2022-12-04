import React, {useEffect} from "react";
import { Form } from "react-bootstrap";
import LeaseCustomerForm from "./LeaseCustomerForm";
import LeaseStorageUnitForm from "./LeaseStorageUnitForm";
import CalcFunc from "../../../functions/CalcFunc";
import DateFunc from '../../../functions/DateFunc'
import { useSelector } from "react-redux";

export const LeaseForm = (props) => {
  const calcTotal = () => {
    let t = CalcFunc.calcTotal(props.leaseObject.startDate, props.leaseObject.endDate, props.leaseObject.rate)
    props.updateData('totalCost', t)
  }
  const leases = useSelector((state) => state.leaseState.leaseArray)
  
  function nextLease() {
    //leases for unit
    const leaseDates = leases.filter(l => {
      if (l.unitId === props.leaseObject.unitId) {
        if (new Date(props.leaseObject.endDate) < new Date(l.startDate)) {
          return l
        } else {
          return undefined
        }
      } else {
        return undefined
      }
    })
    if (leaseDates.length > 1) {
      leaseDates.sort(function(a,b){
        return new Date(a.startDate) - new Date(b.startDate)
      });
      return leaseDates[0].startDate
    } else {
      return undefined
    }
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
      {props.editForm ? 
      <Form.Group className="mb-3" controlId="formGroupEnd">
      <Form.Label>End Date</Form.Label>
      <Form.Control 
        type="date" 
        placeholder="end" 
        min={props.leaseObject.startDate}
        max={nextLease()}
        value={props.leaseObject.endDate}
        onChange={e => props.updateData('endDate', e.target.value)}
      />
    </Form.Group>
     : 
     <Form.Group className="mb-3" controlId="formGroupEnd">
     <Form.Label>End Date</Form.Label>
     <Form.Control 
       type="date" 
       placeholder="end" 
       min={props.leaseObject.startDate}
       value={props.leaseObject.endDate}
       onChange={e => props.updateData('endDate', e.target.value)}
     />
    </Form.Group>}
      {(props.editForm && nextLease() !== undefined) ? <p>Next lease starts on {DateFunc.monthDayYear(nextLease())}</p> : ''}
      {(props.leaseObject.startDate === '' || props.leaseObject.endDate === '') ?
        ''
      :
      <LeaseStorageUnitForm
        units={props.units}
        unitId={props.leaseObject.unitId}
        updateData={props.updateData}
        leaseObject={props.leaseObject}
      />}
      <Form.Group className="mb-3" controlId="formGroupRate">
        <Form.Label>Rate</Form.Label>
        <Form.Control 
          type="number" 
          placeholder="Rate" 
          value={props.leaseObject.rate}
          onChange={e => props.updateData('rate', e.target.value)}
        />
      </Form.Group>
      
    </Form>
    Total Cost ${props.leaseObject.totalCost > 0 ? Number(props.leaseObject.totalCost).toFixed(2) : 0}
    </div>
  );
}

export default LeaseForm;