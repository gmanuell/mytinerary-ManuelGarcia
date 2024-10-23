import React from "react";
import { CiInstagram, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-gray-900 h-1/4 mt-auto text-white">
      <div className="flex lg:flex-row justify-around flex-col items-center text-center md:items-center flex-wrap  bg-[#ffffff19] py-7">
        <div
          className="text-xl gap-5"
        >
          <h1>
            <span className="text-teal-400">Plan</span> your dreams!!
          </h1>
          <div className="flex flex-col">
            <button
              onClick={() => navigate("/cities")}
              className='p-2 m-2  rounded-lg  hover:bg-slate-600'>
              Home
            </button>
            <button
              onClick={() => navigate("/cities")}
              className='p-2  rounded-lg  hover:bg-slate-600'>
              Cities
            </button>
          </div>

        </div>

        <div className="flex text-xl my-5 flex-col">
          <h3>Contact us</h3>
          <div className="flex flex-row mt-2 gap-4">
            <a href="https://www.instagram.com/manuel.garciav/"><CiInstagram /></a>
            <a href="https://www.facebook.com/?locale=es_LA"><CiFacebook /></a>
            <a href="https://github.com/gmanuell"><FaGithub /></a>
            <a href="https://api.whatsapp.com/send?phone=573156312954"><FaWhatsapp /> </a>
          </div>
        </div>

        <div>
          <h3 className="text-xl">
            Find us
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26750.063115327495!2d-74.13100632172677!3d4.696744609474962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cb6430f8607%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1728442070875!5m2!1ses!2sco"
            width="200"
            height="200"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>
      </div>

      <div
        className="
      text-center justify-between text-gray-400 text-sm"
      >
        <h4>© 2024 Mindhub. All rights reserved.</h4>
        <h4>Manuel Garcia</h4>

      </div>
    </footer>
  );
};

export default Footer;