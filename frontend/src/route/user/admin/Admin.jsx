import { useState, useEffect } from "react";
import axios from "axios";
import Services from "./Services";

const Admin = () => {
  const [bookings, setBookings] = useState([]);
  const api = import.meta.env.VITE_API;
  const [status, setStatus] = useState("bookings");
  const [title, setTitle] = useState("");
  const [firstPara, setFirstPara] = useState("");
  const [secondPara, setSecondPara] = useState("");
  const [thirdPara, setThirdPara] = useState("");
  const [images, setImages] = useState(null);
  const [firstImageUrl, setFirstImageUrl] = useState("");
  const [secondImageUrl, setSecondImageUrl] = useState("");
  const [thirdImageUrl, setThirdImageUrl] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(true);
  const handleImageChange = (e) => {
    setImages(e.target.files);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const image of images) {
        formData.append("images", image);
      }
      const response = await axios.post(`${api}/admin/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (response.status === 200) {
        console.log(response);
        setFirstImageUrl(response.data.urls[0]);
        setSecondImageUrl(response.data.urls[1]);
        setThirdImageUrl(response.data.urls[2]);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let url1 = firstImageUrl;
    let url2 = secondImageUrl;
    let url3 = thirdImageUrl;
    try {
      const date = new Date().toLocaleDateString("en-GB"); // Format: day/month/year
      const response = await fetch(`${api}/admin/addBlogs`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          firstPara,
          secondPara,
          thirdPara,
          url1,
          url2,
          url3,
          date,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit blog");
      }

      // Blog post successfully submitted
      alert("Blog added successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`${api}/admin/bookings`); // Assuming your backend server is running on the same domain
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/admin/bookings/${id}`);
      setBookings(bookings.filter((booking) => booking._id !== id));
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

  const handleLogin = () => {
    // Check if the username and password match predefined credentials
    if (username === "admin" && password === "usman") {
      setAuthenticated(false);
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center min-h-[80vh]">
      {authenticated ? (
        <div className=" shadow-lg p-3 flex flex-col w-[300px] h-[30vh] gap-5 rounded-md">
          <h2 className="text-xl font-bold">Login to Admin Panel</h2>
          <input
            type="text"
            placeholder="Username"
            className="py-2 px-1 outline-none border-gray-400 border"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="py-2 px-1 outline-none border-gray-400 border"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-ful py-2 text-lg bg-gray-700 rounded-md cursor-pointer text-white"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      ) : (
        <div className=" flex flex-col items-center min-h-[80vh]">
          <h1 className="text-2xl font-bold my42">Admin Dashboard</h1>
          <nav className="flex justify-center mb-8">
            <button
              className={`mx-4 p-2 rounded-md ${
                status === "bookings" ? " text-blue-500" : " text-black"
              }`}
              onClick={() => setStatus("bookings")}
            >
              All Services
            </button>
            <button
              className={`mx-4 p-2 rounded-md ${
                status === "blogs" ? " text-blue-500" : " text-black"
              }`}
              onClick={() => setStatus("blogs")}
            >
              Blogs
            </button>
            <button
              className={`mx-4 p-2 rounded-md ${
                status === "services" ? " text-blue-500" : " text-black"
              }`}
              onClick={() => setStatus("services")}
            >
              Services
            </button>
          </nav>
          {status === "bookings" && (
            <div>
              {bookings.map((booking) => (
                <div
                  key={booking._id}
                  style={{
                    border: "1px solid #ccc",
                    padding: "10px",
                    marginBottom: "10px",
                  }}
                >
                  <p>Date: {booking.date}</p>
                  <p>Time: {booking.time}</p>
                  <p>Name: {booking.name}</p>
                  <p>Email: {booking.email}</p>
                  <p>Phone: {booking.phone}</p>
                  <button
                    onClick={() => handleDelete(booking._id)}
                    className="bg-red-500 rounded-md text-white cursor-pointer p-2"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
          {status === "blogs" && (
            <form className="flex flex-col w-[40%]">
              <input
                type="text"
                placeholder="Add tite of the blog..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
              />
              <textarea
                className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
                value={firstPara}
                onChange={(e) => setFirstPara(e.target.value)}
                placeholder="First Paragraph"
              />
              <textarea
                className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
                value={secondPara}
                onChange={(e) => setSecondPara(e.target.value)}
                placeholder="Second Paragraph"
              />
              <textarea
                className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
                value={thirdPara}
                onChange={(e) => setThirdPara(e.target.value)}
                placeholder="Third Paragraph"
              />
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
              />
              <button
                className=" bg-green-500 text-xl my-2 text-white px-4 py-2 rounded-md cursor-pointer hover"
                onClick={handleUpload}
              >
                Upload
              </button>{" "}
              <button
                className=" bg-blue-500 text-xl my-2 text-white px-4 py-2 rounded-md cursor-pointer hover "
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          )}
          {status === "services" && <Services />}
        </div>
      )}
    </div>
  );
};

export default Admin;
