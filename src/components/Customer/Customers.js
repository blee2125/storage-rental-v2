import React, {useEffect} from "react";
import { connect, useSelector } from "react-redux";
import { getAllCustomers } from "../../reducers/CustomerReducer"
import CustomerList from "./List/CustomerList";

function Customers(props) {
    const customers = useSelector((state) => state.customerState.customerArray)

    useEffect(() => {
        props.getAllCustomers()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Customers
            <CustomerList
                customerArray={customers}
            />
        </div>
    )
}

export default connect(null, { getAllCustomers }) (Customers)