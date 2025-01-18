import { useContext, useState } from "react";
import BookingContext from "../../../BookingContext";
import axios from "axios";

const Services = () => {
  const { services, setServices } = useContext(BookingContext);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [time, setTime] = useState("");
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState("");
  const [category, setCategory] = useState("tint");
  const api = import.meta.env.VITE_API;
  //function for uploading images
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
        setImgUrl(response.data.urls[0]);
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if ((title, price)) {
      try {
        const response = await axios.post(`${api}/admin/add`, {
          title,
          price,
          time,
          imgUrl,
          category,
        });
        if (response.status === 201) {
          // Reset form fields after successful submission
          setTitle("");
          setPrice("");
          setTime("");
          setImgUrl("");
        }
      } catch (error) {
        console.error("Error adding service:", error);
      }
    }
  };

  return (
    <>
      {services ? (
        <div>
          <form className="flex flex-col w-[100%]">
            <input
              type="text"
              placeholder="Give a name to your service"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
            />
            <input
              type="number"
              placeholder="Add Price of your service"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
            />
            <select
              className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="tint">Tint</option>
              <option value="engine">Engine</option>
              <option value="washes">Washes</option>
              <option value="detailing">Detailing</option>
            </select>
            <input
              type="number"
              placeholder="Add time in minuets"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="border-2 border-gray-400 outline-none px-3 py-2 my-4"
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
        </div>
      ) : (
        <div className=" mt-4">
          <button
            className="bg-blue-500 py-2 px-4 mt-1 cursor-pointer hover:bg-blue-700 text-white rounded-md"
            onClick={() => {
              setServices(true);
            }}
          >
            Add a service
          </button>
          <h1 className="text-3xl font-bold mt-4">
            All services You are Offering
          </h1>
          <div className="flex"></div>
        </div>
      )}
    </>
  );
};

export default Services;
