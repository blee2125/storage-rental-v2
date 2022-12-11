import React from "react";
import { Form, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import DateFunc from "../../../functions/DateFunc";

export const LeaseDateForm = (props) => {
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

    return (
        <div>
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="formGroupStart">
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
            <Form.Group as={Col} className="mb-3" controlId="formGroupEnd">
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
            <Form.Group as={Col} className="mb-3" controlId="formGroupEnd">
                <Form.Label>End Date</Form.Label>
                <Form.Control 
                type="date" 
                placeholder="end" 
                min={props.leaseObject.startDate}
                value={props.leaseObject.endDate}
                onChange={e => props.updateData('endDate', e.target.value)}
                />
            </Form.Group>}
          </Row>
        {(props.editForm && nextLease() !== undefined) ? <p>Next lease starts on {DateFunc.monthDayYear(nextLease())}</p> : ''}
        </div>
    );
}

export default LeaseDateForm;