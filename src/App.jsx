import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/home.jsx';
import NotFound from './pages/NotFound.jsx';
import Cities from './pages/Cities.jsx';
import City from './pages/City.jsx';
import Standarlayout from './layout/Standarlayout.jsx';


const router = createBrowserRouter([
  {element: <Standarlayout></Standarlayout>,
    children:[
      {path:"/",element:<Home></Home>},
      {path:"/home",element:<Home></Home>},
      {path:"/cities",element:<Cities></Cities>},
      {path:"/city",element:<City></City>},
      {path:"/*",element:<NotFound></NotFound>},
    ]
  },

])
const App = () => {
  
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
