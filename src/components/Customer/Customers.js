import React, {useEffect, useState} from "react";
import { connect, useSelector } from "react-redux";
import { getAllCustomers } from "../../reducers/CustomerReducer"
import CustomerList from "./List/CustomerList";
import CustomerSearch from "./List/CustomerSearch";

function Customers(props) {
    const customers = useSelector((state) => state.customerState.customerArray)
    const [search, setSearch] = useState('')

    const filterCustomers = customers.filter(customer => {
        if (search === '') {
            return customer
        }
        if (customer.name.toLowerCase().includes(search.toLowerCase())) {
            return customer
        } else if (customer.email.toLowerCase().includes(search.toLowerCase())) {
            return customer
        } else if (customer.phone.toLowerCase().includes(search.toLowerCase())) {
            return customer
        }
        return undefined
    })

    useEffect(() => {
        props.getAllCustomers()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            Customers
            <CustomerSearch
                search={search}
                setSearch={setSearch}
            />
            <CustomerList
                customerArray={filterCustomers}
            />
        </div>
    )
}

export default connect(null, { getAllCustomers }) (Customers)