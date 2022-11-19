import { configureStore } from '@reduxjs/toolkit'
import storageUnitReducer from './reducers/StorageUnitReducer'
import customerReducer from './reducers/CustomerReducer'

export default configureStore({
  reducer: {
    storageUnitState: storageUnitReducer,
    customerState: customerReducer
  },
})