import React, {useState} from "react";
import { Button, Card } from "react-bootstrap"
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createCustomer } from "../../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForm";
import { notify } from "../../../reducers/NotificationReducer";

function CustomerAdd(props) {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const [customerObject, setCustomerObject] = useState({
        name: '',
        email: '',
        phone: ''
    });

    function isValidEmail() {
        return /\S+@\S+\.\S+/.test(customerObject.email);
    }

    const updateData = (target, value) => {
        let updatedValue = {};
            updatedValue = {[target]: value};
        setCustomerObject(customerObject => ({
            ...customerObject,
            ...updatedValue
        }));        
    };

    const handleSubmit = () => {
        if (customerObject.customerName !== '') {
            if(isValidEmail()){
                props.createCustomer(customerObject)
                .unwrap()
                .then((data) => {
                    dispatch(notify({message: 'Customer Added',type: 'success'}))
                    navigate(`/customers/view/${data._id}`)
                })
                .catch((e) => {console.log(e)});
            } else {
                console.log('email invalid')
            }
        }
    }

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Create Customer</h2>
                <CustomerForm 
                    customerObject={customerObject}
                    updateData={updateData}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createCustomer, notify }) (CustomerAdd)