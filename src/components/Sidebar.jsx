// import React from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { CiUser } from "react-icons/ci";


// const routes = [

//     {id:1, to: "/", text: "Home"},
//     {id:2, to: "/cities", text: "Cities" },
    

// ]


// export default function Sidebar() {
//   const navigate = useNavigate();
//   return (
//     <div className='bg-gray-900 text-white  px-4 sm:px-6 py-2.5'>

//     <nav className='container flex flex-wrap items-center justify-between mx-auto'>
//     <button onClick={() => navigate("/home")}>
//       <img
//   src="/logo.png" 
//   className="h-8 mr-3 sm:h-10"
//   alt="Logo"
// />
//   </button>
//         <ul className='flex gap-4'>
//             {routes.map((r) => (
//                 <li 
//                 key={r.id}
//                 >
//                     <NavLink to={r.to} className={({isActive})=> isActive ? "text-green-500":""}>{r.text}</NavLink>
//                 </li>
                
//             ))}
//         </ul>
//        <CiUser className='h-8'/>
//     </nav> 
//             </div>
//   )
// }
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const routes = [
    { id: 1, to: "/", text: "Home" },
    { id: 2, to: "/cities", text: "Cities" },
];

export default function Sidebar() {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
          <div className="bg-gray-900 h-3/4 w-full flex flex-row text-white justify-between">
  <nav className="mr-5 flex justify-between items-center w-full p-4 relative">
    {/* Logo a la izquierda */}
    <div className="flex items-center">
      <button onClick={() => navigate("/home")} className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="/myy.png" className="h-15 ml-5 w-40" alt="Logo" />
      </button>
    </div>

    {/* Botón de menú para móviles */}
    <button onClick={toggleSidebar} className="sm:hidden z-50">
      {isOpen ? <AiOutlineClose className="h-8" /> : <AiOutlineMenu className="h-8" />}
    </button>

    {/* Links de navegación y perfil para pantallas grandes */}
    <div className="hidden md:flex items-center">
      <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
        {routes.map((r) => (
          <li key={r.id}>
            <NavLink
              to={r.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white-500"
                  : "block py-2 px-3 text-white md:bg-transparent md:text-white-700 md:p-0"
              }
            >
              {r.text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Icono de usuario */}
      <CiUser className="h-10 w-10 ml-4 text-white" />
    </div>

    {/* Sidebar lateral pequeño con elementos centrados horizontalmente */}
    <div
      className={`fixed top-0 right-0 h-full bg-gray-800 p-4 w-48 transform transition-transform z-50 shadow-lg flex flex-col items-center ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}
    >
      {/* Botón para cerrar el menú */}
      <button onClick={toggleSidebar} className="text-white mb-4">
        <AiOutlineClose className="h-6 w-6" />
      </button>

      {/* Icono de usuario centrado horizontalmente */}
      <CiUser className="h-10 w-10 text-white mb-4" />

      {/* Lista de enlaces centrados horizontalmente */}
      <ul className="font-medium flex flex-col space-y-4 items-center">
        {routes.map((r) => (
          <li key={r.id}>
            <NavLink
              to={r.to}
              className={({ isActive }) =>
                isActive
                  ? "text-white-500"
                  : "block py-2 px-3 text-white"
              }
            >
              {r.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  </nav>
</div>




        </>
    );
}


