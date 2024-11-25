// import React, { useState } from "react";
// import axios from "axios";

// const SignUp = ({ toggleForm }) => {
//   const [firstname, setFirstname] = useState("");
//   const [lastname, setLastname] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [photo, setPhoto] = useState("");
//   const [country, setCountry] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   // Lista de países
//   const countries = [
//     "United States",
//     "Canada",
//     "Mexico",
//     "Colombia",
//     "Venezuela",
//     "Brazil",
//     "Argentina",
//     "Germany",
//     "France",
//     "Italy",
//     "Spain",
//     "United Kingdom",
//     "Australia",
//     "India",
//     "China",
//     "Japan",
//     "South Korea",
//     "South Africa",
//     "Egypt",
//     "Russia",
//     "Turkey",
//     "Netherlands",
//   ];

//   // Manejo del envío del formulario
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");
//     setSuccess("");

//     try {
//       const response = await axios.post("http://localhost:8080/api/users/register", {
//         firstName: firstname,
//         lastName: lastname,
//         email,
//         password,
//         photo,
//         country,
//       });

//       setSuccess(response.data.message);
//       setFirstname("");
//       setLastname("");
//       setEmail("");
//       setPassword("");
//       setPhoto("");
//       setCountry("");
//     } catch (err) {
//       setError(err.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div className="w-full">
//         <p className="text-xs my-2 text-gray-300 inline-flex me-2">Already have an account?</p>
//         <button type="button" onClick={toggleForm}>
//           <p className="text-xs my-2 text-sky-300">Sign In</p>
//         </button>
//       </div>
//       {/* First Name */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">First Name:</label>
//         <input
//           type="text"
//           value={firstname}
//           onChange={(e) => setFirstname(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       {/* Last Name */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Last Name:</label>
//         <input
//           type="text"
//           value={lastname}
//           onChange={(e) => setLastname(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       {/* Email */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           autoComplete="email"
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       {/* Password */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       {/* Photo */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Photo:</label>
//         <input
//           type="url"
//           value={photo}
//           onChange={(e) => setPhoto(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] tracking-wide border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         />
//       </div>
//       {/* Country */}
//       <div className="w-full">
//         <label className="block mb-1 text-sm font-medium text-gray-300">Country:</label>
//         <select
//           value={country}
//           onChange={(e) => setCountry(e.target.value)}
//           required
//           className="w-full px-4 py-2 text-white bg-[#011f26] border border-sky-700 rounded focus:outline-none focus:ring-2 focus:ring-sky-950"
//         >
//           <option value="" disabled>
//             Select your country
//           </option>
//           {countries.map((countryName, index) => (
//             <option key={index} value={countryName}>
//               {countryName}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button
//         type="submit"
//         className="w-full py-2 font-semibold text-white bg-sky-950 rounded hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-teal-500"
//         disabled={loading}
//       >
//         {loading ? "Creating Account..." : "Create Account"}
//       </button>
//       {/* Feedback Messages */}
//       {error && <p className="text-red-500">{error}</p>}
//       {success && <p className="text-green-500">{success}</p>}
//     </form>
//   );
// };

// export default SignUp;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = ({ toggleForm }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [country, setCountry] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate(); // Hook para navegación

  // Lista de países
  const countries = [
    "United States",
    "Canada",
    "Mexico",
    "Colombia",
    "Venezuela",
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

  // Manejo del envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:8080/api/users/register", {
        firstName: firstname,
        lastName: lastname,
        email,
        password,
        photo,
        country,
      });

      setSuccess(response.data.message);
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setPhoto("");
      setCountry("");
      setTimeout(() => {
        navigate("/home"); // Redirigir al usuario después de 1 segundo
      }, 1000);
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-gray-800 m-5 rounded-lg shadow-lg max-w-md mx-auto"
    >
      <div className="w-full text-center">
        <h2 className="text-xl font-bold text-white">Sign Up</h2>
        <p className="text-sm text-gray-400">
          Already have an account?{" "}
          <button
          type="button"
          onClick={() => navigate("/signin")}>Sign In <span className="text-orange-400">here!</span></button>
        </p>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">First Name</label>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Last Name</label>
        <input
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Photo</label>
        <input
          type="url"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-300">Country</label>
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          required
          className="w-full px-4 py-2 mt-1 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
        >
          <option value="" disabled>
            Select your country
          </option>
          {countries.map((countryName, index) => (
            <option key={index} value={countryName}>
              {countryName}
            </option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 text-white bg-sky-600 hover:bg-sky-500 rounded-lg focus:ring-2 focus:ring-sky-500 focus:outline-none"
      >
        {loading ? "Creating Account..." : "Create Account"}
      </button>
      {error && <p className="text-sm text-red-500">{error}</p>}
      {success && <p className="text-sm text-green-500">{success}</p>}
    </form>
  );
};

export default SignUp;
