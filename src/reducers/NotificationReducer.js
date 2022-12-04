import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  type: '',
  notifyArray: []
}

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notifyReset: () => {
      return initialState
    },
    notifyNext: (state) => {
      state.notifyArray.shift()
      if (state.notifyArray.length > 0) {
        state.message = state.notifyArray[0].message
        state.type = state.notifyArray[0].type
      } else {
        state.message = ''
        state.type = ''
      }
    },
    notify: (state, action) => {
      state.notifyArray.push(action.payload)
      if (state.notifyArray.length > 0) {
        state.message = state.notifyArray[0].message
        state.type = state.notifyArray[0].type
      }
    },
  },
})

export const { notify, notifyNext, notifyReset } = notificationSlice.actions

export default notificationSlice.reducer