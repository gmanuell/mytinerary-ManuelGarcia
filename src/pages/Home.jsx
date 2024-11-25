// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { fetchCities } from '../store/actions/citiesSlice';
// import Carrusel from '../components/carrousel';

// const Home = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchCities());
//   }, [dispatch]);

//   const loginWithToken = async (token) => {
//     try {
//       console.log("Se ejecuto Login With Token");
  
//       const response = await axios.get(
//         "http://localhost:8080/api/users/validateToken",
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       return response.data.response;
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
  
//   export default function Home() {
   
//     const navigate = useNavigate();
  
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       const params = new URLSearchParams(window.location.search);
//       const token = params.get("token");
//       if (token) {
//         localStorage.setItem("token", token);
  
//         loginWithToken(token).then((user) => {
//           dispatch(setUser({ user, token }));
//         });
//         navigate("/")
//       }
      
//     }, [dispatch,navigate]);

//   return (
//     <div className="Home">
//       <div className="relative h-3/6">
//         <img
//           src="https://es.investinbogota.org/wp-content/uploads/2023/02/Bogota-puerta-de-europa-invest-in-bogota.jpeg"
//           alt="Banner"
//           className="w-full h-3/5 object-cover animate-zoom"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50">
//           <h1 className="text-4xl font-bold mb-4">Explore the Cities</h1>
//           <button
//             onClick={() => navigate('/cities')}
//             className="p-2 bg-orange-600 rounded-lg hover:bg-slate-600"
//           >
//             Let's go!
//           </button>
//         </div>
//       </div>
//       <Carrusel />
//       <footer></footer>
//     </div>
//   );
// };

// export default Home;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUser } from "../store/actions/authActions"; // Importa la acción de authActions
import { fetchCities } from "../store/actions/citiesSlice";
import Carrusel from "../components/carrousel";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para validar el token
  const loginWithToken = async (token) => {
    try {
      console.log("Ejecutando loginWithToken...");

      const response = await axios.get(
        "http://localhost:8080/api/users/validateToken",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Token validado:", response.data.response);
      return response.data.response; // Devuelve los datos del usuario
    } catch (error) {
      console.error("Error al validar el token:", error);
      return null;
    }
  };

  useEffect(() => {
    // Obtén el token de los parámetros de la URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      // Guarda el token en localStorage
      localStorage.setItem("token", token);

      // Valida el token y guarda el usuario en el store
      loginWithToken(token).then((user) => {
        if (user) {
          dispatch(setUser({ user, token })); // Actualiza el store con los datos del usuario
          navigate("/"); // Redirige al home
        } else {
          console.error("Token inválido.");
          navigate("/signin"); // Si el token no es válido, redirige al inicio de sesión
        }
      });
    }

    // Despacha la acción para obtener las ciudades
    dispatch(fetchCities());
  }, [dispatch, navigate]);

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
            onClick={() => navigate("/cities")}
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
