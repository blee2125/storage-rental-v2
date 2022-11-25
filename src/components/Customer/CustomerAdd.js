import React, {useState} from "react";
import { Button, Card } from "react-bootstrap"
import { connect } from "react-redux";
import { createCustomer } from "../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForms/CustomerForm";

function CustomerAdd(props) {
    const [customerObject, setCustomerObject] = useState({
        name: '',
        email: '',
        phone: ''
    });

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
            props.createCustomer(customerObject)
            .unwrap()
            .then((data) => {
                console.log(data)
            })
            .catch((e) => {console.log(e)});
        }
    }

    return (
        <div>
            Create Customer
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
            <CustomerForm 
                customerObject={customerObject}
                updateData={updateData}
            />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createCustomer }) (CustomerAdd)