import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Cities() {
  const navigate = useNavigate();
  const location = useLocation();
  const city = location.state?.city;

  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <div className='flex flex-col items-center justify-center my-5 text-white bg-opacity-50'>
      {city ? (
        <>
          <img src={city.image} alt={city.name} className="h-96 rounded-lg w-auto  mb-4" />
          <h1 className="text-6xl text-center font-bold mb-4">{city.name}  {city.country}</h1>
        </>
      ) : (
        <h1 className="text-7xl font-bold mb-4">Ooops...</h1>
      )}
      <h2 className='text-6xl text-center'>Page under construction</h2>
      <button
        onClick={navigateBack}
        className='p-2 my-8 bg-orange-600 rounded-lg hover:bg-slate-600'
      >
        Go Back
      </button>
      <img src="https://www.lucushost.com/blog/wp-content/uploads/2018/11/como-crear-una-pagina-en-construccion.png" alt="construccion" />
    </div>
  );
}