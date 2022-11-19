import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import StorageUnitService from "../services/StorageUnitService";

export const createStorageUnit = createAsyncThunk(
    "storage-unit/create",
    async (data) => {
      const res = await StorageUnitService.create(data);
      return res.data;
    }
);

export const getStorageUnit = createAsyncThunk(
    "storage-unit/get",
    async ({ id }) => {
      await StorageUnitService.get(id);
      return { id };
    }
);

export const getAllStorageUnits = createAsyncThunk(
  "storage-unit/getAll",
    async () => {
      const res = await StorageUnitService.getAll();
      return res.data;
    }
);

export const updateStorageUnit = createAsyncThunk(
    "storage-unit/update",
    async ({id, data}) => {
        const res = await StorageUnitService.update(id, data);
        return res.data;
    }
);

export const deleteStorageUnit = createAsyncThunk(
    "storage-unit/delete",
    async ({ id }) => {
        await StorageUnitService.delete(id);
        return { id };
    }
);

export const deleteAllStorageUnits = createAsyncThunk(
  "storage-unit/deleteall",
    async () => {
      const res = await StorageUnitService.deleteAll();
      return res.data;
    }
);

const initialState = {
  storageUnitArray: []
}

export const storageUnitSlice = createSlice({
  name: 'storageUnit',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(createStorageUnit.fulfilled, (state, action) => {
      state.storageUnitArray.push(action.payload)
    })
    builder.addCase(getAllStorageUnits.fulfilled, (state, action) => {
      state.storageUnitArray = action.payload;
    })
    builder.addCase(updateStorageUnit.fulfilled, (state, action) => {
      state.storageUnitArray = state.storageUnitArray.map(unit => {
        if (unit._id === action.payload._id) {
          return unit = action.payload
        }
        return unit
      })
    })
    builder.addCase(deleteStorageUnit.fulfilled, (state, action) => {
      state.storageUnitArray = state.storageUnitArray.filter(unit => unit._id !== action.payload.id)
    })
    builder.addCase(deleteAllStorageUnits.fulfilled, (state, action) => {
      return initialState
    })
  },
})

export default storageUnitSlice.reducer