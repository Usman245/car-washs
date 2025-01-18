import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import LoadingGif from "../../assets/loading.gif";

const Blog = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const api = import.meta.env.VITE_API;
  const firstDivRef = useRef(null);
  console.log(id);

  useEffect(() => {
    async function handleFetch() {
      try {
        const response = await fetch(`${api}/blog/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch blog");
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setLoading(false); // Handle loading state in case of an error
      }
    }

    handleFetch();
  }, [id]);

  useEffect(() => {
    if (firstDivRef.current) {
      const height = firstDivRef.current.offsetHeight;
      console.log(height);
      // Set the height of the second div to match the height of the first div
      document.getElementById("secondDiv").style.height = `${height + 573}px`;
    }
  }, [data]);

  return (
    <div className="mt-24 min-h-[80vh]">
      {loading ? (
        <img src={LoadingGif} className="w-[200px]" alt="Loading..." />
      ) : (
        <div className="flex mt-2 justify-center items-center w-full px-4 gap-[30px] pb-6">
          <div
            ref={firstDivRef}
            className="w-[60%] flex flex-col justify-center items-start"
          >
            <span className="my-1 text-base font-normal">{data.date}</span>
            <h1 className="text-xl font-bold my-1">{data.title}</h1>
            <p className="text-lg font-normal">{data.firstPara}</p>
            <img
              src={`${api}${data.url1}`}
              alt="First Image"
              className="w-full my-4"
            />
            <p className="text-lg font-normal">{data.secondPara}</p>
            <img
              src={`${api}${data.url2}`}
              alt="Second Image"
              className="w-full my-4"
            />
            <p className="text-lg font-normal">{data.thirdPara}</p>
            <img
              src={`${api}${data.url3}`}
              alt="Third Image"
              className="w-full my-4"
            />
          </div>
          <div id="secondDiv" className="h-full w-[3px] bg-gray-300"></div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Blog;
