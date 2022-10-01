import { createSlice } from "@reduxjs/toolkit";


const pagesSlice = createSlice({
  name: 'pages',
  initialState: {
    currentPage: 2
  },
  reducers: {
    prevPage(state) {
      console.log('prev page');
      state.currentPage--
    },
    nextPage(state) {
      console.log('next page');
      state.currentPage++
    }
  }
})

export const {prevPage, nextPage} = pagesSlice.actions;
export default pagesSlice.reducer;