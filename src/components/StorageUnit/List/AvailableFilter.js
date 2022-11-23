import React from "react";
import { Form } from "react-bootstrap";

function AvailableFilter(props) {

    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formGroupSearch">
                    <Form.Label>Available</Form.Label>
                    <Form.Select
                    value={props.availableFilter}
                    onChange={e => props.setAvailableFilter(e.target.value)}
                    >
                    <option value=''>All</option>
                    <option value='available'>Available</option>
                    <option value='notAvailable'>Not Available</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    )
}

export default (AvailableFilter)