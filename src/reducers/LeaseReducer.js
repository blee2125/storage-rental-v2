import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import LeaseService from "../services/LeaseService";

export const createLease = createAsyncThunk(
    "lease/create",
    async (data) => {
        const res = await LeaseService.create(data);
        return res.data;
    }
);

export const getAllLeases = createAsyncThunk(
    "lease/getAll",
    async () => {
        const res = await LeaseService.getAll();
        return res.data;
    }
);

export const getLease = createAsyncThunk(
  "lease/get",
  async (id) => {
      const res = await LeaseService.get(id);
      return res.data;
  }
);

export const updateLease = createAsyncThunk(
    "lease/update",
    async ({id, data}) => {
        const res = await LeaseService.update(id, data);
        return res.data;
    }
);

export const deleteLease = createAsyncThunk(
    "lease/delete",
    async ({ id }) => {
        await LeaseService.delete(id);
        return { id };
    }
);

const initialState = {
  leaseArray: []
}

export const leaseSlice = createSlice({
  name: 'lease',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createLease.fulfilled, (state, action) => {
      state.leaseArray.push(action.payload)
    })
    builder.addCase(getAllLeases.fulfilled, (state, action) => {
      state.leaseArray = action.payload;
    })
    builder.addCase(getLease.fulfilled, (state, action) => {
      state.leaseArray = state.leaseArray.map(lease => {
        if (lease._id === action.payload._id) {
          return action.payload
        }
        return lease
      })
    })
    builder.addCase(updateLease.fulfilled, (state, action) => {
      state.leaseArray = state.leaseArray.map(lease => {
        if (lease._id === action.payload._id) {
          return action.payload
        }
        return lease
      })
    })
    builder.addCase(deleteLease.fulfilled, (state, action) => {
      state.leaseArray = state.leaseArray.filter(lease => lease._id !== action.payload.id)
    })
  },
})

export default leaseSlice.reducer