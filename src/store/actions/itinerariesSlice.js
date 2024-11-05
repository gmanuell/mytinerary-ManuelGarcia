import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItineraries = createAsyncThunk(
  'itineraries/fetchItineraries',
  async (cityId) => {
    const response = await axios.get(`http://localhost:8080/api/itineraries/cityid/${cityId}`);
    return response.data.response;
  }
);

const itinerariesSlice = createSlice({
  name: 'itineraries',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItineraries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchItineraries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(fetchItineraries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default itinerariesSlice.reducer;
