import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Provider } from 'react-redux'
import store from './store'

import Customer from './components/Customer/Customer'
import StorageUnit from './components/StorageUnit/StorageUnit'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Customer/>
        <StorageUnit/>
      </Provider>
    </div>
  );
}

export default App;
