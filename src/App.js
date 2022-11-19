import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from './components/View/NavBar';
import Customer from './components/Customer/Customer'
import StorageUnit from './components/StorageUnit/StorageUnit'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route path="/customers" element={<Customer/>}/>
            <Route path="/storage-units" element={<StorageUnit/>}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
