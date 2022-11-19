import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from "react-router-dom";

import NavBar from './components/View/NavBar';
import Home from './components/View/Home'
import Customer from './components/Customer/Customer'
import StorageUnits from './components/StorageUnit/StorageUnits'
import StorageUnitAdd from './components/StorageUnit/StorageUnitAdd';

function App() {
  return (
    <div className="App">
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/customers" element={<Customer/>}/>
            <Route path="/storage-units" element={<StorageUnits/>}/>
            <Route path="/storage-units/add" element={<StorageUnitAdd/>}/>
          </Routes>
    </div>
  );
}

export default App;
