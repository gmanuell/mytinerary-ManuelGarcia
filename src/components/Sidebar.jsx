// import React, { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { CiUser } from "react-icons/ci";
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

// const routes = [
//     { id: 1, to: "/", text: "Home" },
//     { id: 2, to: "/cities", text: "Cities" },
// ];

// export default function Sidebar() {
//     const navigate = useNavigate();
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <>
//           <div className="bg-gray-900 h-3/4 w-full flex flex-row text-white justify-between">
//   <nav className="mr-5 flex justify-between items-center w-full p-4 relative">
//     <div className="flex items-center">
//       <button onClick={() => navigate("/home")} className="flex items-center space-x-3 rtl:space-x-reverse">
//         <img src="/myy.png" className="h-15 ml-5 w-40" alt="Logo" />
//       </button>
//     </div>

//     <button onClick={toggleSidebar} className="sm:hidden z-50">
//       {isOpen ? <AiOutlineClose className="h-8" /> : <AiOutlineMenu className="h-8" />}
//     </button>

//     <div className="hidden md:flex items-center">
//       <ul className="font-medium flex space-x-8 rtl:space-x-reverse">
//         {routes.map((r) => (
//           <li key={r.id}>
//             <NavLink
//               to={r.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-white-500"
//                   : "block py-2 px-3 text-white md:bg-transparent md:text-white-700 md:p-0"
//               }
//             >
//               {r.text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>

//       <button onClick={() => navigate("/signin")}>
//          <CiUser className="h-10 w-10 ml-4 text-white" />
//         </button>
//     </div>

//     <div
//       className={`fixed top-0 right-0 h-full bg-gray-800 p-4 w-48 transform transition-transform z-50 shadow-lg flex flex-col items-center ${
//         isOpen ? 'translate-x-0' : 'translate-x-full'
//       } md:hidden`}
//     >
//       <button onClick={toggleSidebar} className="text-white mb-4">
//         <AiOutlineClose className="h-6 w-6" />
//       </button>

//       <CiUser className="h-10 w-10 text-white mb-4" />

//       <ul className="font-medium flex flex-col space-y-4 items-center">
//         {routes.map((r) => (
//           <li key={r.id}>
//             <NavLink
//               to={r.to}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-white-500"
//                   : "block py-2 px-3 text-white"
//               }
//             >
//               {r.text}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   </nav>
// </div>




//         </>
//     );
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
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <>
      <div className="bg-gray-900 h-3/4 w-full flex flex-row text-white justify-between">
        <nav className="mr-5 flex justify-between items-center w-full p-4 relative">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate("/home")}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src="/myy.png" className="h-15 ml-5 w-40" alt="Logo" />
            </button>
          </div>

          {/* Sidebar toggle button for small screens */}
          <button onClick={toggleSidebar} className="sm:hidden z-50">
            {isOpen ? <AiOutlineClose className="h-8" /> : <AiOutlineMenu className="h-8" />}
          </button>

          {/* Navigation links for larger screens */}
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

            <div className="relative">
              <button onClick={toggleUserMenu}>
                <CiUser className="h-10 w-10 ml-4 text-white" />
              </button>

              {isUserMenuOpen && (
                <div
                  className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg py-2"
                  style={{
                    animation: "slideDown 0.3s ease-in-out",
                  }}
                >
                  <button
                    onClick={() => navigate("/signin")}
                    className="block px-4 py-2 text-left w-full hover:bg-teal-600"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => navigate("/signup")}
                    className="block px-4 py-2 text-left w-full hover:bg-teal-600"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>

          <div
            className={`fixed top-0 right-0 h-full bg-gray-800 p-4 w-48 transform transition-transform z-50 shadow-lg flex flex-col items-center ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } md:hidden`}
          >
            <button onClick={toggleSidebar} className="text-white mb-4">
              <AiOutlineClose className="h-6 w-6" />
            </button>

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
