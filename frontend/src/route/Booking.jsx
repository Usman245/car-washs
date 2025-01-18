import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import Calender from "../components/mini/Calender";
import BookingContext from "../BookingContext.jsx";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const BookingComponent = () => {
  const { date } = useContext(BookingContext);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const api = import.meta.env.VITE_API;
  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleSubmit = async () => {
    // Check if all fields are filled
    if (!name || !phone || !email || !selectedTime) {
      setError("Please fill out all fields.");
      return;
    } else {
      try {
        console.log({ date, time: selectedTime, name, email, phone });
        const response = await fetch(`${api}/bookings`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Adjust content type if needed
            // Add any other headers if required
          },
          body: JSON.stringify({
            date,
            time: selectedTime,
            name,
            email,
            phone,
          }),
        });
        if (response.status === 201) {
          setSuccess(true);
          setEmail(""), setPhone(""), setName(""), setSelectedTime("");
        }
      } catch (error) {
        console.error("Error while submitting booking:", error);
        setError("Error while submitting booking. Please try again later.");
      }
    }
  };

  return (
    <>
      {success ? (
        <Navigate to="/success" />
      ) : (
        <div className="flex justify-center mt-20 w-full absolute">
          {/* Left Section: Calendar and Time */}
          <div className="flex flex-col mr-8 w-full">
            {/* Calendar */}
            <Calender />
          </div>

          {/* Right Section: Form */}
          <div className="w-full items-center flex flex-col justify-center">
            <div className="flex flex-wrap gap-4 mb-4 w-[70%]">
              <button
                onClick={() => handleTimeChange("9am")}
                className={`mr-2 px-5 py-1 ${
                  selectedTime === "9am"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                9am
              </button>
              <button
                onClick={() => handleTimeChange("11am")}
                className={`mr-2 px-5 py-1 ${
                  selectedTime === "11am"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                11am
              </button>
              <button
                onClick={() => handleTimeChange("1pm")}
                className={`mr-2 px-5 py-1 ${
                  selectedTime === "1pm"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                1pm
              </button>
              <button
                onClick={() => handleTimeChange("2pm")}
                className={`mr-2 px-5 py-1 ${
                  selectedTime === "2pm"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                2pm
              </button>
              <button
                onClick={() => handleTimeChange("3pm")}
                className={`mr-2 px-5 py-1 ${
                  selectedTime === "3pm"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                3pm
              </button>
              <button
                onClick={() => handleTimeChange("4pm")}
                className={`px-5 py-1 mr-2 ${
                  selectedTime === "4pm"
                    ? "bg-blue-500 text-white"
                    : "bg-white text-black border border-blue-400 hover:bg-blue-100"
                }`}
              >
                4pm
              </button>
            </div>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-4 w-[70%] px-4 py-2 rounded-md border border-gray-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mb-4 w-[70%] px-4 py-2 rounded-md border border-gray-400"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mb-4 w-[70%] px-4 py-2 rounded-md border border-gray-400"
            />
            <button
              onClick={handleSubmit}
              className="bg-blue-500 w-max  text-white px-6 py-3 rounded-md"
            >
              Book
            </button>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      )}
    </>
  );
};

export default BookingComponent;
