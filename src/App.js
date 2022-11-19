import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/View/NavBar';
import Home from './components/View/Home'
import Customers from './components/Customer/Customers'
import CustomerAdd from './components/Customer/CustomerAdd'
import StorageUnits from './components/StorageUnit/StorageUnits'
import StorageUnitAdd from './components/StorageUnit/StorageUnitAdd';

function App() {
  return (
    <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customers" element={<Customers/>}/>
            <Route path="/customer/add" element={<CustomerAdd/>}/>
            <Route path="/storage-units" element={<StorageUnits/>}/>
            <Route path="/storage-units/add" element={<StorageUnitAdd/>}/>
          </Routes>
    </div>
  );
}

export default App;
