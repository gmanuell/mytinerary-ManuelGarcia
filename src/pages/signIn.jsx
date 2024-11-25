import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from "react";
import { login } from "../store/actions/authActions.js";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authStore = useSelector((state) => state.authStore);
  console.log("Estado del Auth", authStore);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleGoogleSignIn = () => {
    window.location.href = "http://localhost:8080/api/auth/signIn/google";
  };

  const loading = authStore.loading;
  const error = authStore.error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 space-y-4 flex flex-col items-center justify-center bg-[#011f26] rounded-lg shadow-md"
      >
        <h2 className="text-2xl font-semibold text-center text-white">
          Sign In
        </h2>
        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Email:
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 text-sm font-medium text-gray-300">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 text-white bg-[#011f26] border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 font-semibold text-white bg-teal-600 rounded hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={handleGoogleSignIn}
          className="w-full py-2 mt-2 font-semibold text-white bg-red-600 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Sign in with Google
        </button>
        {loading && <p className="text-center text-teal-400">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
      <h3 className="text-white text-s">are you not registered? <button
          type="button"
          onClick={() => navigate("/signup")}>sign up <span className="text-orange-400">here!</span></button></h3>
      </form>
    </div>
  );
};

export default LoginForm;
