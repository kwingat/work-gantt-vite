import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const operationSlice = createSlice({
  name: 'operations',
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
  },
});

const { actions, reducer } = operationSlice;

export default reducer;
