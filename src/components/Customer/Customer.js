import React, {useState} from "react";
import { connect } from "react-redux";
import { Button } from "react-bootstrap"
import { createCustomer } from "../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForms/CustomerForm"

function Customers(props) {
    const [customerObject, setCustomerObject] = useState({
        customerName: ''
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
            customers
            <CustomerForm
                customerObject={customerObject}
                updateData={updateData}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { createCustomer }) (Customers)