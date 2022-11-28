import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PaymentService from "../services/PaymentService";

export const createPayment = createAsyncThunk(
    "payment/create",
    async (data) => {
        const res = await PaymentService.create(data);
        return res.data;
    }
);

export const getAllPayments = createAsyncThunk(
    "payment/getAll",
    async () => {
        const res = await PaymentService.getAll();
        return res.data;
    }
);

export const updatePayment = createAsyncThunk(
    "payment/update",
    async ({id, data}) => {
        const res = await PaymentService.update(id, data);
        return res.data;
    }
);

export const deletePayment = createAsyncThunk(
    "payment/delete",
    async ({ id }) => {
        await PaymentService.delete(id);
        return { id };
    }
);

const initialState = {
  paymentArray: []
}

export const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createPayment.fulfilled, (state, action) => {
      state.paymentArray.push(action.payload)
    })
    builder.addCase(getAllPayments.fulfilled, (state, action) => {
      state.paymentArray = action.payload;
    })
    builder.addCase(updatePayment.fulfilled, (state, action) => {
      state.paymentArray = state.paymentArray.map(payment => {
        if (payment._id === action.payload._id) {
          return action.payload
        }
        return payment
      })
    })
    builder.addCase(deletePayment.fulfilled, (state, action) => {
      state.paymentArray = state.paymentArray.filter(payment => payment._id !== action.payload.id)
    })
  },
})

export default paymentSlice.reducer