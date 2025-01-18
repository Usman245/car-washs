import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [logged, setLogged] = useState(false);
  const [errors, setErrors] = useState({});
  const api = import.meta.env.VITE_API;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Remove error message for the field being edited
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters long";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.trim().length < 4) {
      newErrors.password = "Password must be at least 4 characters long";
    }

    if (Object.keys(newErrors).length === 0) {
      const res = await axios.post(`${api}/user/register`, formData);
      if (res.status === 201) {
        setLogged(true);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      {logged ? (
        <Navigate to="/login" />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-semibold mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
            <span className="block text-center text-sm mt-4">
              Already a member?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
