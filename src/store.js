import { configureStore } from '@reduxjs/toolkit'
import storageUnitReducer from './reducers/StorageUnitReducer'
import customerReducer from './reducers/CustomerReducer'
import leaseReducer from './reducers/LeaseReducer'

export default configureStore({
  reducer: {
    storageUnitState: storageUnitReducer,
    customerState: customerReducer,
    leaseState: leaseReducer
  },
})