import React, {useState} from "react";
import { Button } from "react-bootstrap"
import { connect } from "react-redux";
import { updateCustomer } from "../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForms/CustomerForm";

function CustomerEdit(props) {
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
            props.updateCustomer(customerObject)
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
            <CustomerForm 
                customerObject={customerObject}
                updateData={updateData}
            />
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { updateCustomer }) (CustomerEdit)