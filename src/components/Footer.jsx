import React from "react";


const Footer = () => {
  return (
    <footer className="bg-gray-900 h-1/4 text-white">
      <div className="md:flex text-center md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className="text-teal-400">Live</span> yours dreams!!
        </h1>
        <div>
         
        </div>
      </div>
    
      <div
        className="
      text-center justify-between text-gray-400 text-sm gap-10"
      >
        <h4>© 2024 Mindhub. All rights reserved.</h4>
        <h4>Manuel Garcia</h4>
 
      </div>
    </footer>
  );
};

export default Footer;