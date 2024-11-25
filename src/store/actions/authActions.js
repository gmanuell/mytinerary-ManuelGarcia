import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const setUser = createAction("setUser", (datos)=>{
    return {
        payload:datos,
    }
})

const logout = createAction("logout");



const login = createAsyncThunk("login", async({email,password}) => {
    console.log("Entramos al Login");
    const credentials = {
        email:email,
        password:password
    }
    const response = await axios.post("http://localhost:8080/api/auth/signIn",credentials)
    console.log("Se proceso la solicitud");
    console.log("Response",response.data);
    console.log("Superamos la solicitud de Login");
    
    localStorage.setItem("token",response.data.token)
    return response.data
}) 


export {login,setUser,logout};