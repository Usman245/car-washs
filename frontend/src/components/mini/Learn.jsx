import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoadingGif from "../../assets/loading.gif";
import BookingContext from "../../BookingContext";

// Move the API declaration outside the component function
const api = import.meta.env.VITE_API;

export const Learn = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setError } = useContext(BookingContext);

  useEffect(() => {
    // Fetch blogs when the component mounts
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${api}/admin/blogs`);
        if (response.status === 200) {
          setLoading(false);
          setBlogs(response.data);
        }
      } catch (error) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    };

    fetchBlogs();
  }, []);
  const MAX_LENGTH = 200;
  const truncateText = (text) => {
    return text.length > MAX_LENGTH
      ? `${text.substring(0, MAX_LENGTH)}...`
      : text;
  };
  return (
    <div className="w-full bg-white py-4 flex flex-col justify-center items-center">
      <h1 className="text-blue-500 font-bold text-4xl my-2">Learn More!</h1>
      {loading ? (
        <div>
          {" "}
          <img src={LoadingGif} alt="loading..." className="w-[200px]" />
        </div>
      ) : (
        <div className="flex flex-row mobile:flex-col justify-center items-center gap-4 ">
          {blogs.map((e) => (
            <div key={e.id} className="mt-4 w-[80%] mobile:w-full mobile:px-2">
              <div className="flex ">
                <img
                  src={`${api}${e.url1}`}
                  alt=""
                  className="w-[225px] h-[230px]"
                />
                <div className="flex-col flex items-start ml-3">
                  <span className=" text-base mb-2 font-light">{e.date}</span>
                  <h1 className="text-xl font-medium">{e.title}</h1>
                  <p className="text-lg my-1 font-light">
                    {truncateText(e.firstPara)}
                  </p>
                  <Link
                    to={`/blog/${e._id}`}
                    className="text-blue-500 cursor-pointer my-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <hr className="mt-4 h-[2px] w-full bg-gray-200" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
