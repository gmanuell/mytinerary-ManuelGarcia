import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cities from './pages/Cities.jsx';
import City from './components/CityDetail.jsx';
import Standarlayout from './layout/Standarlayout.jsx';
import SignIn from './pages/signIn.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from './store/actions/authActions.js';
import SignRoute from './components/signRoute.jsx';
import SignUp from './pages/signup.jsx';

const router = createBrowserRouter([
  {element: <Standarlayout></Standarlayout>,
    children:[
      {path:"/",element:<Home></Home>},
      {path:"/home",element:<Home></Home>},
      {path:"/cities",element:<Cities></Cities>},
      {path:"/city",element:<City></City>},
      {path: "/signin",element: (<SignRoute><SignIn></SignIn></SignRoute>)},
      {path: "/signUp",element: (<SignRoute><SignUp></SignUp></SignRoute>)},
      {path:"/*",element:<NotFound></NotFound>},
    ]
  },

])

const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "http://localhost:8080/api/users/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};


const App = () => {
  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
