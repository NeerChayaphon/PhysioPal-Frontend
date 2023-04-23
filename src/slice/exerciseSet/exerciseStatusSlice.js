import { createSlice } from '@reduxjs/toolkit';

export const exerciseStatusSlice = createSlice({
  name: 'exerciseStatus',
  initialState: {
    data: [],
  },
  reducers: {
    addExerciseStatus: (state, action) => {
      state.data.push(action.payload);
    },
    removeExerciseStatus: (state) => {
      state.data = [];
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase('authStateChange', (state, action) => {
  //       state.user = action.payload;
  //     });
  //   },
});

export const { addExerciseStatus, removeExerciseStatus } =
  exerciseStatusSlice.actions;
export default exerciseStatusSlice.reducer;
