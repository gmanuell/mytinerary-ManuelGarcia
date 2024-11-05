import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCities } from '../store/actions/citiesSlice';

const CitiesCards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const cities = useSelector((state) => state.cities.list);
  const status = useSelector((state) => state.cities.status);
  const error = useSelector((state) => state.cities.error);

  useEffect(() => {
    dispatch(fetchCities());
  }, [dispatch]);

  const handleSearch = (event) => {
    dispatch(fetchCities(event.target.value));
  };

  const viewCityDetails = (city) => {
    navigate("/city", { state: { city } });
  };

  return (
    <div className="p-4">
      <div className="mb-6">
        <input
          type="text"
          className="w-1/3 text-black p-2 border border-gray-300 rounded-lg"
          onChange={handleSearch}
          placeholder="search"
        />
      </div>

      {status === 'loading' ? (
        <div className="text-center">Loading...</div>
      ) : status === 'failed' ? (
        <div className="text-center text-red-500">{error}</div>
      ) : cities.length === 0 ? (
        <div className="flex justify-center items-center h-64 w-full">
          <p className="text-white text-center text-7xl w-11/12">
            No results found
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-40 object-cover sm:h-48 md:h-56 lg:h-64"
              />
              <div className="p-4">
                <h3 className="text-center text-lg font-semibold text-gray-800">
                  {city.name} {city.country}
                </h3>
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => viewCityDetails(city)}
                    className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-slate-600"
                  >
                    View more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CitiesCards;

