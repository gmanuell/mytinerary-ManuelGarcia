import React from 'react';
import { useNavigate, useLocation,useParams } from 'react-router-dom'
import {  } from "module";

const NotFound = () => {
  const navigate = useNavigate()
  function navigateBack(){
    navigate(-1)
  }
  return (
    <div className=" inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
            <h1 className="text-9xl font-bold my-8">404 </h1>
            <h2 className='text-9xl text-center'>
            Page Not Found
            </h2>
            <button
    onClick={()=> navigateBack()} 
    className='p-2 my-20 bg-orange-600 rounded-lg  hover:bg-slate-600'>Go Back</button>

          </div>
        
  );
};

export default NotFound;

