const { createSlice } = require("@reduxjs/toolkit");


const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    currentTheme: 'dark'
  },
  reducers: {
    switchTheme(state) {
      if (state.currentTheme === 'dark') state.currentTheme = 'light';
      else if (state.currentTheme === 'light') state.currentTheme = 'dark';
    }
  }
})

export const {switchTheme} = themeSlice.actions;
export default themeSlice.reducer;