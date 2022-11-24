import React from "react";
import { Form } from "react-bootstrap";
function LeaseFilter(props) {

    return (
        <div>
            <Form >
                {/* <Form.Group className="mb-3" controlId="formGroupSearch">
                <Form.Control 
                    type="text" 
                    placeholder="Search" 
                    defaultValue={props.filter}
                    onChange={e => props.setFilter(e.target.value)}
                />
                </Form.Group> */}
                <Form.Group key={`inline-radio`} className="mb-3" >
                    <Form.Label>Status</Form.Label>
                    <Form.Check 
                        inline
                        type={'radio'}
                        id={'Current'}
                        label={'Current'}
                        name="group1"
                        onChange={e => props.setFilter('Current')}
                        defaultChecked
                    />
                    <Form.Check 
                        inline
                        type={'radio'}
                        id={'Future'}
                        label={'Future'}
                        name="group1"
                        onChange={e => props.setFilter('Future')}
                    />
                    <Form.Check 
                        inline
                        type={'radio'}
                        id={'Past'}
                        label={'Past'}
                        name="group1"
                        onChange={e => props.setFilter('Past')}
                    />
                </Form.Group>
            </Form>
        </div>
    )
}

export default (LeaseFilter)