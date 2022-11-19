import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import CustomerService from "../services/CustomerService";

export const createCustomer = createAsyncThunk(
    "customer/create",
    async (data) => {
      const res = await CustomerService.create(data);
      return res.data;
    }
);

export const getCustomer = createAsyncThunk(
    "customer/get",
    async ({ id }) => {
      await CustomerService.get(id);
      return { id };
    }
);

export const getAllCustomers = createAsyncThunk(
  "customer/getAll",
    async () => {
      const res = await CustomerService.getAll();
      return res.data;
    }
);

export const updateCustomer = createAsyncThunk(
    "customer/update",
    async ({id, data}) => {
        const res = await CustomerService.update(id, data);
        return res.data;
    }
);

export const deleteCustomer = createAsyncThunk(
    "customer/delete",
    async ({ id }) => {
        await CustomerService.delete(id);
        return { id };
    }
);

export const deleteAllCustomers = createAsyncThunk(
  "customer/deleteall",
    async () => {
      const res = await CustomerService.deleteAll();
      return res.data;
    }
);

const initialState = {
  customerArray: []
}

export const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
  },
  extraReducers: {
    [createCustomer.fulfilled]: (state, action) => {
        state.customerArray.push(action.payload)
    },
    [getCustomer.fulfilled]: (state, action) => {
        
    },
    [getAllCustomers.fulfilled]: (state, action) => {
        state.customerArray = action.payload;
    },
    [updateCustomer.fulfilled]: (state, action) => {
      state.customerArray = state.customerArray.map(customer => {
        if (customer._id === action.payload._id) {
          return customer = action.payload
        }
        return customer
      })
    },
    [deleteCustomer.fulfilled]: (state, action) => ({
        ...state,
        customerArray: state.customerArray.filter(customer => customer._id !== action.payload.id)
    }),
    [deleteAllCustomers.fulfilled]: () => {
      return initialState
    },
  },
})

export default customerSlice.reducer