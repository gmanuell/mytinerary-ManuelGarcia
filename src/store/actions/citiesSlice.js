import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCities = createAsyncThunk('cities/fetchCities', async (searchQuery = '') => {
  const response = await axios.get(
    `http://localhost:8080/api/cities/all${searchQuery ? `?name=${searchQuery}` : ''}`
  );
  return response.data.response;
});

const citiesSlice = createSlice({
  name: 'cities',
  initialState: {
    list: [],
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCities.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCities.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchCities.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default citiesSlice.reducer;
