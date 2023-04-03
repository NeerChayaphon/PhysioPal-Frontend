import { createSlice } from '@reduxjs/toolkit';

export const exerciseSetSlice = createSlice({
  name: 'exerciseSet',
  initialState: {
    data: null,
    count: 0,
  },
  reducers: {
    addExerciseSet: (state, action) => {
      state.data = action.payload;
      state.count = 0;
    },
    removeExerciseSet: (state) => {
      state.data = null;
    },
    incrementExercise: (state) => {
      state.count = state.count + 1;
    },
  },
  //   extraReducers: (builder) => {
  //     builder.addCase('authStateChange', (state, action) => {
  //       state.user = action.payload;
  //     });
  //   },
});

export const { addExerciseSet, removeExerciseSet, incrementExercise } =
  exerciseSetSlice.actions;
export default exerciseSetSlice.reducer;
