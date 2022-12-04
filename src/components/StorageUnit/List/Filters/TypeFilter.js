import React from "react";
import { Form } from "react-bootstrap";

function TypeFilter(props) {

    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formGroupType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                    value={props.typeFilter}
                    onChange={e => props.setTypeFilter(e.target.value)}
                    >
                    <option value=''>All</option>
                    <option value='Self Storage'>Self Storage</option>
                    <option value='Vehicle'>Vehicle</option>
                    </Form.Select>
                </Form.Group>
            </Form>
        </div>
    )
}

export default (TypeFilter)