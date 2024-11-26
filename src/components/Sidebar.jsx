
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/actions/authActions";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { CiUser } from "react-icons/ci";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const routes = [
  { id: 1, to: "/", text: "Home" },
  { id: 2, to: "/cities", text: "Cities" },
];

export default function Sidebar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, token } = useSelector((state) => state.authStore);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/signin");
  };

  return (
    <div className="bg-gray-900 w-full flex flex-row text-white justify-between relative">
      <nav className="flex justify-between items-center w-full p-4">
        <div className="flex items-center">
          <button
            onClick={() => navigate("/home")}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/myy.png" className="h-15 ml-5 w-40" alt="Logo" />
          </button>
        </div>

        {/* Rutas principales */}
        <div className="hidden md:flex items-center space-x-6">
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
        </div>

        {token ? (
          <div className="flex items-center space-x-4">
            <h3 className="text-5xl text-white">{user?.
              firstName}</h3>
            <img
              src={user?.photo || "my.png"}
              alt="User photo"
              className="w-10 h-10 rounded-full"
            />
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 rounded text-white hover:bg-red-700"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="relative">
            <button onClick={toggleUserMenu}>
              <CiUser className="h-10 w-10 ml-4 text-white" />
            </button>
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg py-2 z-50">
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
        )}
      </nav>

      <div className="md:hidden relative">
        <button
          onClick={toggleMobileMenu}
          className="text-white focus:outline-none"
        >
          {isMobileMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </button>

        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-800 bg-opacity-90 flex justify-center items-center z-10">
            <div className="bg-white p-8 rounded-lg shadow-lg space-y-6 text-center">
              <button
                onClick={toggleMobileMenu}
                className="absolute top-4 right-4 text-white"
              >
                <AiOutlineClose size={30} />
              </button>
              <ul className="space-y-6">
                {routes.map((r) => (
                  <li key={r.id}>
                    <NavLink
                      to={r.to}
                      className={({ isActive }) =>
                        isActive
                          ? "text-blue-500"
                          : "text-gray-800 hover:text-blue-500"
                      }
                      onClick={toggleMobileMenu}
                    >
                      {r.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

