import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
  name: "MainSlice",
  initialState: {
    isLoading: false,
    songs: null,
    reqArtist: "",
    recentSearches: [],
  },
  reducers: {
    setLoadingIsTrue(state) {
      state.isLoading = true;
    },
    setLoadingIsFalse(state) {
      state.isLoading = false;
    },
    setSongs(state, action) {
      state.songs = action.payload;
    },
    setArtist(state, action) {
      state.reqArtist = action.payload;
    },
    addRecent(state, action) {
      state.recentSearches.push(action.payload);
    },
  },
});

export const mainSliceActions = mainSlice.actions;

export default mainSlice.reducer;
