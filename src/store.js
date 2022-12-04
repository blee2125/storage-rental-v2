import { configureStore } from '@reduxjs/toolkit'
import storageUnitReducer from './reducers/StorageUnitReducer'
import customerReducer from './reducers/CustomerReducer'
import leaseReducer from './reducers/LeaseReducer'
import PaymentReducer from './reducers/PaymentReducer'
import NotificationReducer from './reducers/NotificationReducer'

export default configureStore({
  reducer: {
    storageUnitState: storageUnitReducer,
    customerState: customerReducer,
    leaseState: leaseReducer,
    paymentState: PaymentReducer,
    notificationState: NotificationReducer
  },
})