import { configureStore } from '@reduxjs/toolkit'
import citiesReducer from "./actions/citiesSlice"
import itinerariesReducer from "./actions/itinerariesSlice"
import authReducer from "./reducer/authReducer"



const store = configureStore({
    reducer: {
        cities: citiesReducer,
        itineraries: itinerariesReducer,
        authStore: authReducer
    },
  });

export default store