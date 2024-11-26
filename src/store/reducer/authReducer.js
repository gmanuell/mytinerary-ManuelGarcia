import { createReducer } from "@reduxjs/toolkit";
import { login, setUser,logout } from "../actions/authActions";

const initialState = {  
    loading : false,
    error : false,
    user : null,
    token : null
}



const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login.fulfilled, (state, action) => {
            console.log("Inicio de sesión exitoso");
            state.loading = false;
            state.error = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
        })
        .addCase(login.pending, (state) => {
            console.log("Inicio de sesión en progreso");
            state.loading = true;
            state.error = false;
            state.user = null;
            state.token = null;
        })
        .addCase(login.rejected, (state, action) => {
            console.log("Error en el inicio de sesión:", action.payload);
            localStorage.removeItem("token");
            state.loading = false;
            state.error = action.payload || "Error desconocido";
            state.user = null;
            state.token = null;
        })
        .addCase(setUser, (state, action) => {
            state.user = action.payload?.user || null;
            state.token = action.payload?.token || null;
        })
        .addCase(logout, (state) => {
            localStorage.clear();
            state.user = null;
            state.token = null;
        });
    });
    
    export default authReducer;