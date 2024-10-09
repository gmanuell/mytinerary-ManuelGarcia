import React from "react";
import { CiInstagram, CiFacebook, CiYoutube} from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-gray-900 h-1/4  text-white">
      <div className="flex lg:flex-row flex-col items-center text-center gap-8 md:items-center flex-wrap  bg-[#ffffff19] py-7">
        <h2
          className="lg:text-4xl  text-center  lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Plan</span> your dreams!!
        </h2>
        
        <div className="flex flex-col">
          <h3>Contact us</h3>
        <div className="flex flex-row gap-4">
          <CiInstagram/>
        <CiFacebook />
        <CiYoutube />
        <FaGithub />
        <FaWhatsapp />
          </div>
        </div>

        <div>
         <h3>
         Find us
         </h3>
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26750.063115327495!2d-74.13100632172677!3d4.696744609474962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9cb6430f8607%3A0x8eea5954ef14af30!2sAeropuerto%20Internacional%20El%20Dorado!5e0!3m2!1ses!2sco!4v1728442070875!5m2!1ses!2sco" width="310" height="310" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
         
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