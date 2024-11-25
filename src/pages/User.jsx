import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, signUp } from "../store/actions/authActions";

// Icons
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// Styles
import "../styles/User.css";

const User = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Estado para alternar entre formularios
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [photo, setPhoto] = useState("");
  const [country, setCountry] = useState("");
  const dispatch = useDispatch();
  const authStore = useSelector(state => state.authStore);

  // Manejo del envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignIn) {
      // Si es Sign In
      dispatch(login({ email, password }));
    } else {
      // Si es Sign Up
      dispatch(signUp({ firstname, lastname, email, password, country, photo }));
        // window.location.reload();
    }
  };

  // Toggle de visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  // Alternar entre Sign In y Create Account
  const toggleForm = () => {
    setIsSignIn((prevState) => !prevState);
  };

  const loginWithGoogle = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google"
  }

  const loading = authStore.loading;
  const error = authStore.error;

  // Lista de países
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Brazil",
    "Argentina",
    "Germany",
    "France",
    "Italy",
    "Spain",
    "United Kingdom",
    "Australia",
    "India",
    "China",
    "Japan",
    "South Korea",
    "South Africa",
    "Egypt",
    "Russia",
    "Turkey",
    "Netherlands",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="form w-96 max-w-sm p-6 my-6 space-y-5 flex flex-col items-center justify-center h-auto rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-center text-white">
        {isSignIn ? "Sign In" : "Create Account"}
      </h2>

      {isSignIn ? (
        // Formulario de inicio de sesión
        <>
          <div className="w-full">
            <p className="text-xs my-2 text-gray-300 inline-flex me-2">New user?</p>
            <button type="button" onClick={toggleForm}>
              <p className="text-xs my-2 text-sky-300">Create an account</p>
            </button>
            <label className="block mb-1 text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-email" 
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
          </div>

          <div className="w-full relative">
            <label className="block mb-1 text-sm font-medium text-gray-300">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password" 
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-sky-950 rounded hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Sign In
          </button>

          {loading && <p className="text-center text-teal-400">Loading...</p>}
          {error && <p className="text-center text-red-500">{error}</p>}
        </>
      ) : (
        // Formulario de creación de cuenta
        <>
          <div className="w-full">
            <p className="text-xs my-2 text-gray-300 inline-flex me-2">Already have an account?</p>
            <button type="button" onClick={toggleForm}>
              <p className="text-xs my-2 text-sky-300">Sign In</p>
            </button>

            <label className="block mb-1 text-sm font-medium text-gray-300">First Name:</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-sm font-medium text-gray-300">Last Name:</label>
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
          </div>

          <div className="w-full">
            <label className="block mb-1 text-sm font-medium text-gray-300">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="current-email" 
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
          </div>
          <div className="w-full relative">
            <label className="block mb-1 text-sm font-medium text-gray-300">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password" 
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-10 text-gray-300"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium text-gray-300">Photo:</label>
            <input
              type="url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium text-gray-300">Country:</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
            >
              <option value="" disabled>Select your country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>
            {loading && <p className="text-center text-teal-400">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-2 font-semibold text-white bg-sky-950 rounded hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            Create Account
          </button>
        </>
      )}

      <div className="flex items-center my-4 w-full">
        <hr className="flex-grow border-gray-400" />
        <p className="px-2 text-gray-300">Or</p>
        <hr className="flex-grow border-gray-400" />
      </div>

      <button
        type="submit"
        className="w-full flex items-center justify-center py-2 bg-gray-200 text-black font-semibold rounded hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
        onClick={() => loginWithGoogle()}
      >
        <FcGoogle className="mr-2" />
        Sign In with Google
      </button>
    </form>
  );
};

export default User;