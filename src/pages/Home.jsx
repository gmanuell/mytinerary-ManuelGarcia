import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCities } from '../store/actions/citiesSlice';
import Carrusel from '../components/carrousel';

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  return (
    <div className="Home">
      <div className="relative h-3/6">
        <img
          src="https://es.investinbogota.org/wp-content/uploads/2023/02/Bogota-puerta-de-europa-invest-in-bogota.jpeg"
          alt="Banner"
          className="w-full h-3/5 object-cover animate-zoom"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold mb-4">Explore the Cities</h1>
          <button
            onClick={() => navigate('/cities')}
            className="p-2 bg-orange-600 rounded-lg hover:bg-slate-600"
          >
            Let's go!
          </button>
        </div>
      </div>
      <Carrusel />
      <footer></footer>
    </div>
  );
};

export default Home;