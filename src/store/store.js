import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from "./actions/citiesSlice"


const store = configureStore({
    reducer: {
      cities: citiesReducer,
    },
  });

export default store