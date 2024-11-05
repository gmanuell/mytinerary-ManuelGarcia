import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from "./actions/citiesSlice"
import itinerariesReducer from "./actions/itinerariesSlice"



const store = configureStore({
    reducer: {
        cities: citiesReducer,
        itineraries: itinerariesReducer,
    },
  });

export default store