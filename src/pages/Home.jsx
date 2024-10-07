import React from 'react';
import Carrusel from "../components/Carrousel.jsx";
import { useNavigate } from 'react-router-dom';
import {  } from "module";



const imagenes = [
  {title: "Chiang Mai, Tailandia", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/97D6/production/_96907883_gettyimages-508054022.jpg.webp"},
  {title: "Kioto, Japón", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/13416/production/_96907887_gettyimages-538589734.jpg.webp"},
  {title: "Florencia, Italia", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/15B26/production/_96907888_gettyimages-642451368.jpg.webp"},
  {title: "Oaxaca, México", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/18236/production/_96907889_gettyimages-517739928.jpg.webp"},
  {title: "Hoi An, Vietnam", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/268E/production/_96907890_gettyimages-543569320.jpg.webp"},
  {title: "Ciudad del Cabo, Sudáfrica", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/4D9E/production/_96907891_gettyimages-514928156.jpg.webp"},
  {title: "Ubud, Indonesia", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/15BF8/production/_96908098_gettyimages-522557886.jpg.webp"},
  {title: "Santa Fe, Nuevo México, EE.UU.", 
  image: "https://ichef.bbci.co.uk/ace/ws/549/cpsprodpb/10DD8/production/_96908096_gettyimages-495925646.jpg.webp"},
  {title: "Roma, Italia", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/E6C8/production/_96908095_gettyimages-539115110.jpg.webp"},
  {title: "Siam Reap, Camboya", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/BFB8/production/_96908094_gettyimages-504122496.jpg.webp"},
  {title: "Udaipur, India", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/98A8/production/_96908093_gettyimages-487487153.jpg.webp"},
  {title: "Barcelona, España", 
  image: "https://ichef.bbci.co.uk/ace/ws/800/cpsprodpb/7198/production/_96908092_gettyimages-625648834.jpg.webp"},
  ];

const Home = () => {
  const navigate = useNavigate();
  
  return (
    <div className="Home">
      <button onClick={useNavigate("/cities")} className='p-2 bg-slate-200 hover:bg-slate-600'>call to action</button>
      <h1 className="text-2xl font-bold text-center">Carrousel</h1>
      <Carrusel imagenes={imagenes} />
      <footer></footer>
    </div>
  );
};

export default Home;