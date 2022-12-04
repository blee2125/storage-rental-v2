import React, {useEffect} from "react";
import { Form } from "react-bootstrap";

export const LeaseRateForm = (props) => {

    const passStandardRate = () => {
        if (!props.editForm) {
            const unit = props.units.filter(u => {
                if (u._id === props.leaseObject.unitId) {
                    return u
                } else {
                    return undefined
                }
            })
            if (unit[0].standardRate > 0) {
                props.updateData('rate', unit[0].standardRate)
            } else {
                props.updateData('rate', '')
            }
        }
    }

    useEffect(() => {
        passStandardRate()
        // eslint-disable-next-line
    }, [props.leaseObject.unitId])

    return (
        <div>
            <Form.Group className="mb-3" controlId="formGroupRate">
                <Form.Label>Rate</Form.Label>
                <Form.Control 
                type="number" 
                placeholder="Rate" 
                value={props.leaseObject.rate}
                onChange={e => props.updateData('rate', e.target.value)}
                />
            </Form.Group>
        </div>
    );
}

export default LeaseRateForm;