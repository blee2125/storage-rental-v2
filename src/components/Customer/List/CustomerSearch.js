import React from "react";
import { Form } from "react-bootstrap";

function CustomerSearch(props) {

    return (
        <div>
            <Form >
                <Form.Group className="mb-3" controlId="formGroupSearch">
                <Form.Control 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={props.search}
                    onChange={e => props.setSearch(e.target.value)}
                />
                </Form.Group>
            </Form>
        </div>
    )
}

export default (CustomerSearch)