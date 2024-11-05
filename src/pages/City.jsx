import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { fetchItineraries } from '../store/actions/itinerariesSlice.js';

export default function City() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const city = location.state?.city;

  const [showConstructionMessage, setShowConstructionMessage] = useState({});

  useEffect(() => {
    if (city?._id) {
      dispatch(fetchItineraries(city._id));
    } else {
      console.error("City ID is undefined");
    }
  }, [city, dispatch]);

  const itineraries = useSelector((state) => state.itineraries?.list || []);
  const status = useSelector((state) => state.itineraries?.status || 'idle');
  const error = useSelector((state) => state.itineraries?.error || null);

  const navigateBack = () => {
    navigate(-1);
  };

  const handleViewMoreClick = (itineraryId) => {
    setShowConstructionMessage(prevState => ({
      ...prevState,
      [itineraryId]: !prevState[itineraryId]
    }));
  };

  return (
    <div className='flex flex-col items-center justify-center my-5 text-white bg-opacity-50'>
      {city ? (
        <>
          <img src={city.image} alt={city.name} className="h-96 rounded-lg w-auto mb-4" />
          <h1 className="text-6xl text-center font-bold mb-4">{city.name} {city.country}</h1>

          {status === 'loading' && <p>Loading itineraries...</p>}
          {status === 'succeeded' && itineraries.length === 0 && (
            <p className="text-2xl text-center mt-4">No itineraries available for this city</p>
          )}

          <div className="flex flex-wrap justify-center gap-6 mt-8 w-full px-4">
            {status === 'succeeded' && itineraries.map(itinerary => (
              <div 
                key={itinerary._id} 
                className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center w-80 max-w-sm"
              >
                <img src={itinerary.photo} alt={itinerary.name} className="w-24 h-24 rounded-full mb-4" />
                <h3 className="text-lg font-bold">{itinerary.name}</h3>
                <p>Price: {"💵".repeat(itinerary.price)}</p>
                <p>Duration: {itinerary.duration}</p>
                <p>Likes: {itinerary.likes}</p>
                <div className="flex flex-wrap justify-center mt-2">
                  {itinerary.hashtags.map(tag => (
                    <span key={tag} className="text-sm text-gray-300 bg-gray-700 rounded-full px-3 py-1 m-1">{tag}</span>
                  ))}
                </div>
                <button 
                  className="mt-4 bg-orange-600 text-white rounded-lg p-2 w-full"
                  onClick={() => handleViewMoreClick(itinerary._id)}
                >
                  View activities
                </button>
                {showConstructionMessage[itinerary._id] && (
                  <p className="mt-4 text-orange-400">Under construction</p>
                )}
              </div>
            ))}
          </div>

          {status === 'failed' && <p>Error: {error}</p>}
        </>
      ) : (
        <h1 className="text-7xl font-bold mb-4">Ooops...</h1>
      )}
      <button onClick={navigateBack} className='p-2 my-8 bg-orange-600 rounded-lg hover:bg-slate-600'>
        Go Back
      </button>
    </div>
  );
}
