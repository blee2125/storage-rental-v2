import React, { useEffect, useState } from 'react';
import { Alert } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import { notifyNext } from '../../reducers/NotificationReducer';
function Notification(props) {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false)
    const notification = useSelector((state) => state.notificationState)

    function alertCheck() {
        if (notification.type === 'success') {
            setShow(true)
        } else if (notification.type === 'primary') {
            setShow(true)
        } else if (notification.type === 'danger') {
            setShow(true)
        } else if (notification.type === 'secondary') {
            setShow(true)
        } else if (notification.type === 'warning') {
            setShow(true)
        } else if (notification.type === 'info') {
            setShow(true)
        } else if (notification.type === 'light') {
            setShow(true)
        } else if (notification.type === 'dark') {
            setShow(true)
        }
    }

    function resetAlert() {
        if (notification.type === '') {
            setShow(false)
        }
        dispatch(notifyNext())
    }

    useEffect(() => {
        alertCheck()
        const timer = setTimeout(() => {
            resetAlert()
        }, 2000);
        return () => {clearTimeout(timer)};
        // eslint-disable-next-line
    }, [notification.notifyArray])

    return (
        <>
        <Alert show={show} variant={notification.type} onClick={() => {resetAlert()}}>
            <b>{notification.message ? notification.message : ""}</b>
        </Alert>
        </>
    );
}

export default connect(null, { notifyNext }) (Notification)