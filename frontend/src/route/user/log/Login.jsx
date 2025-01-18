import { useContext, useState } from "react";
import axios from "axios";
import BookingContext from "../../../BookingContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const api = import.meta.env.VITE_API;
  const { isLogin, setLogin, setUserEmail } = useContext(BookingContext);

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

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const res = await axios.post(`${api}/user/login`, formData);
        if (res.status === 200) {
          // Access tokens are inside the data property of the response
          const { accessToken, refreshToken } = res.data.data;

          // Save tokens in local storage
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);

          // Update state to indicate user is logged in
          setUserEmail(formData.email);
          setLogin(true);
        }
      } catch (error) {
        console.error("Login failed:", error);
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      {isLogin ? (
        <Navigate to="/" />
      ) : (
        <div className="flex justify-center items-center h-screen">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded shadow-md"
          >
            <h2 className="text-2xl font-bold mb-4">Log In</h2>
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
              Log In
            </button>
            <span className="block text-center text-sm mt-4">
              Don't have an account?{" "}
              <a href="/register" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </span>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
