import { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError("Please fill in all required fields.");
      return;
    }
    // Handle form submission
    // You can submit the form data to your backend here
  };

  return (
    <div className="flex mt-20 flex-col items-center justify-center">
      <h1 className="text-blue-500 text-3xl font-bold mb-4">Create Account</h1>
      <hr className="w-20 border-gray-300 mb-8" />
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          className="w-80 px-4 py-2 rounded-md border border-gray-400 mb-4"
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          className="w-80 px-4 py-2 rounded-md border border-gray-400 mb-4"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-80 px-4 py-2 rounded-md border border-gray-400 mb-4"
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone (optional)"
          className="w-80 px-4 py-2 rounded-md border border-gray-400 mb-4"
        />
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-md mb-4"
        >
          Create Account
        </button>
        <p className="text-gray-600">
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SignupForm;
