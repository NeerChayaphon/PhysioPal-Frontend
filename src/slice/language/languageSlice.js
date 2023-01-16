import { createSlice } from '@reduxjs/toolkit';

export const languageSlice = createSlice({
  name: 'language',
  initialState: { value: 'English' },
  reducers: {
    setEnglish: (state) => {
      state.value = 'English';
    },
    setThai: (state) => {
      state.value = 'Thai';
    },
  },
});

export const { setEnglish, setThai } = languageSlice.actions;
export default languageSlice.reducer;
