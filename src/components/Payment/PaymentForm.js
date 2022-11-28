import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPayment } from '../../reducers/PaymentReducer'

function PaymentForm(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [paymentObject, setPaymentObject] = useState({
        leaseId: '',
        customerId: '',
        payment: ''
    });

    const updateData = (target, value) => {
        let updatedValue = {};
        updatedValue = {[target]: value};
        setPaymentObject(paymentObject => ({
            ...paymentObject,
            ...updatedValue
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPayment(paymentObject)
            .unwrap()
            .then(() => {
                handleClose()
            })
            .catch((e) => {console.log(e)});
    }

    useEffect(() => {
        if (props.lease) {
            updateData('leaseId', props.lease._id)
            updateData('customerId', props.lease.customerId)
        }
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
                            onChange={e => updateData('payment', e.target.value)}
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

export default connect(null, {createPayment}) (PaymentForm)