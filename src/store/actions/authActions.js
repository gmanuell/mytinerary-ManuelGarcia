
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("setUser", (datos) => {
  return {
    payload: datos, 
  };
});

export const logout = createAction("logout");

export const login = createAsyncThunk(
  "login",
  async ({ email, firstName, password }, { rejectWithValue }) => {
    try {
      console.log("Entramos al Login");
      const credentials = { email, password, firstName };
      
      const response = await axios.post(
        "http://localhost:8080/api/auth/signIn",
        credentials
      );
      console.log("Solicitud de inicio de sesión exitosa", response.data);

      localStorage.setItem("token", response.data.token);

      return response.data; 
    } catch (error) {
      console.error(
        "Error en el inicio de sesión:",
        error.response?.data || error.message
      );

      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const selectIsAuthenticated = (state) => !!state.authStore.token;
export const selectUser = (state) => state.authStore.user;
export const selectAuthLoading = (state) => state.authStore.loading;
export const selectAuthError = (state) => state.authStore.error;
export const selectAuthSuccess = (state) => state.authStore.success;
