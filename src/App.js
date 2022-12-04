import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {useEffect} from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";

import NavBar from './components/View/NavBar';
import Notification from './components/View/Notification'
import Home from './components/View/Home'
import Customers from './components/Customer/Customers'
import CustomerAdd from './components/Customer/CustomerForms/CustomerAdd'
import CustomerView from './components/Customer/CustomerView';
import CustomerEdit from './components/Customer/CustomerForms/CustomerEdit';
import StorageUnits from './components/StorageUnit/StorageUnits'
import StorageUnitAdd from './components/StorageUnit/StorageUnitForms/StorageUnitAdd';
import StorageUnitView from './components/StorageUnit/StorageUnitView';
import StorageUnitEdit from './components/StorageUnit/StorageUnitForms/StorageUnitEdit';
import Leases from './components/Lease/Leases'
import LeaseAdd from './components/Lease/LeaseForms/LeaseAdd';
import LeaseView from './components/Lease/LeaseView';
import LeaseEdit from './components/Lease/LeaseForms/LeaseEdit';
import Payments from './components/Payment/Payments';

import { getAllLeases } from "./reducers/LeaseReducer"
import { getAllCustomers } from "./reducers/CustomerReducer"
import { getAllStorageUnits } from "./reducers/StorageUnitReducer"
import { getAllPayments } from "./reducers/PaymentReducer"

function App(props) {

  useEffect(() => {
    props.getAllLeases()
    props.getAllCustomers()
    props.getAllStorageUnits()
    props.getAllPayments()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="App">
        <NavBar/>
        <Notification />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='customers'>
              <Route path="" element={<Customers/>}/>
              <Route path="add" element={<CustomerAdd/>}/>
              <Route path="view/:id" element={<CustomerView/>}/>
              <Route path="edit/:id" element={<CustomerEdit/>}/>
            </Route>
            <Route path='storage-units'>
              <Route path="" element={<StorageUnits/>}/>
              <Route path="add" element={<StorageUnitAdd/>}/>
              <Route path="view/:id" element={<StorageUnitView/>}/>
              <Route path="edit/:id" element={<StorageUnitEdit/>}/>
            </Route>
            <Route path='leases'>
              <Route path="" element={<Leases/>}/>
              <Route path="add" element={<LeaseAdd/>}/>
              <Route path="view/:id" element={<LeaseView/>}/>
              <Route path="edit/:id" element={<LeaseEdit/>}/>
            </Route>
            <Route path='payments'>
              <Route path="" element={<Payments/>}/>
            </Route>          
          </Routes>
    </div>
  );
}

export default connect(null, { getAllLeases, getAllCustomers, getAllStorageUnits, getAllPayments }) (App);
