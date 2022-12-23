import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from "react-redux";
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createPayment } from '../../reducers/PaymentReducer'
import { getLease } from '../../reducers/LeaseReducer';
import { notify } from '../../reducers/NotificationReducer';

function PaymentForm(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const today = new Date();
    const defaultDate = today.toLocaleDateString('en-CA')
    const [paymentObject, setPaymentObject] = useState({
        leaseId: '',
        customerId: '',
        payment: '',
        paymentType: '',
        date: defaultDate
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
                props.getLease(paymentObject.leaseId)
                dispatch(notify({message: 'Payment Added',type: 'success'}))
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
        <Button variant="outline-primary" onClick={handleShow}>
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
                <Form.Group className="mb-3" controlId="formGroupPaymentType">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                        onChange={e => updateData('paymentType', e.target.value)}
                    >
                        <option value=''></option>
                        <option value='Cash'>Cash</option>
                        <option value='Check'>Check</option>
                        <option value='Credit Card'>Credit Card</option>
                        <option value='Adjustment'>Adjustment</option>
                        <option value='Other'>Other</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDate">
                    <Form.Control 
                        type="date" 
                        placeholder="payment"
                        defaultValue={defaultDate}
                        onChange={e => updateData('date', e.target.value)}
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

export default connect(null, { createPayment, getLease, notify }) (PaymentForm)