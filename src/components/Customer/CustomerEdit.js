import React, {useState, useEffect} from "react";
import { Button, Card } from "react-bootstrap"
import { connect, useSelector } from "react-redux";
import { updateCustomer } from "../../reducers/CustomerReducer"
import CustomerForm from "./CustomerForms/CustomerForm";
import { useParams, useNavigate } from "react-router-dom";

function CustomerEdit(props) {
    let navigate = useNavigate();
    const routeParams = useParams();
    const customer = useSelector((state) => state.customerState.customerArray.filter(c => c._id === routeParams.id)[0])
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
            props.updateCustomer({id: customer._id, data: customerObject})
            .unwrap()
            .then((data) => {
                navigate(`/customers/view/${data._id}`)
            })
            .catch((e) => {console.log(e)});
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
            Edit Customer
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

export default connect(null, { updateCustomer }) (CustomerEdit)