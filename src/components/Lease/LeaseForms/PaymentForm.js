import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { updateLease } from '../../../reducers/LeaseReducer'

function PaymentForm(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [leaseObject, setLeaseObject] = useState({
        unitId: '',
        customerId: '',
        rate: '',
        totalCost: '',
        startDate: '',
        endDate: '',
        payments: ''
    });

    const updateData = (target, value) => {
        let updatedValue = {};
        updatedValue = {[target]: value};
        setLeaseObject(leaseObject => ({
            ...leaseObject,
            ...updatedValue
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateLease({id: leaseObject._id, data: leaseObject})
            .unwrap()
            .then(() => {
                handleClose()
            })
            .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        setLeaseObject(leaseObject => ({
            ...leaseObject,
            ...props.lease
        }))
    // eslint-disable-next-line
    }, [props])

    return (
        <>
        <Button onClick={handleShow}>
            Add payment
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add Payment</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="formGroupPayment">
                        <Form.Control 
                            type="number" 
                            placeholder="payment" 
                            onChange={e => updateData('payments', e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button onClick={handleSubmit}>
                Add
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default connect(null, {updateLease}) (PaymentForm)