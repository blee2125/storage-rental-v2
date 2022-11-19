import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/View/NavBar';
import Home from './components/View/Home'
import Customers from './components/Customer/Customers'
import CustomerAdd from './components/Customer/CustomerAdd'
import CustomerView from './components/Customer/CustomerView';
import CustomerEdit from './components/Customer/CustomerEdit';
import StorageUnits from './components/StorageUnit/StorageUnits'
import StorageUnitAdd from './components/StorageUnit/StorageUnitAdd';
import StorageUnitView from './components/StorageUnit/StorageUnitView';
import StorageUnitEdit from './components/StorageUnit/StorageUnitEdit';

function App() {

  return (
    <div className="App">
        <NavBar/>
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
                                
          </Routes>
    </div>
  );
}

export default App;
