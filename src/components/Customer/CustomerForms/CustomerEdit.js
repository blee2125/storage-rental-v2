import React, {useState, useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap"
import { updateCustomer } from "../../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForm";

function CustomerEdit(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === routeParams.id)[0])
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
                props.updateCustomer({id: customer._id, data: customerObject})
                .unwrap()
                .then((data) => {
                    navigate(`/customers/view/${data._id}`)
                })
                .catch((e) => {console.log(e)});
            } else {
                console.log('email invalid')
            }
        }
    }

    useEffect(() => {
        setCustomerObject(customerObject => ({
            ...customerObject,
            ...customer
        }))
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <Card bg='light' border="secondary" style={{ padding: '25px', margin: "25px"}}>
                <h2>Edit Customer</h2>
                <CustomerForm 
                    customerObject={customerObject}
                    updateData={updateData}
                />
            </Card>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default connect(null, { updateCustomer }) (CustomerEdit)