import { useContext, useEffect, useState } from "react";
import LoadingGif from "../../assets/loading.gif";
import BookingContext from "../../BookingContext";

const ServicesComponent = () => {
  const [selectedService, setSelectedService] = useState("All Services");
  const api = import.meta.env.VITE_API;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { setError, setErrorMessage } = useContext(BookingContext);

  const handleServiceChange = (service) => {
    setSelectedService(service);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/admin/services`);
        const jsonData = await response.json(); // Extract JSON data from the response
        if (response.status === 200) {
          setLoading(false);
          setData(jsonData);
        }
      } catch (error) {
        setErrorMessage("Internal server error");
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      }
    };
    fetchData();
  }, []);

  // Call the async function to fetch data

  return (
    <div className="w-full bg-gray-200 pb-4 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 text-blue-500">
        Online Appointments
      </h1>
      <nav className="flex justify-center mb-8">
        <button
          className={`mx-4 p-2 rounded-md ${
            selectedService === "All Services"
              ? " text-blue-500"
              : " text-black"
          }`}
          onClick={() => handleServiceChange("All Services")}
        >
          All Services
        </button>
        <button
          className={`mx-4 p-2 rounded-md ${
            selectedService === "Tint" ? " text-blue-500" : " text-black"
          }`}
          onClick={() => handleServiceChange("Tint")}
        >
          Tint
        </button>
        <button
          className={`mx-4 p-2 rounded-md ${
            selectedService === "Washes" ? " text-blue-500" : " text-black"
          }`}
          onClick={() => handleServiceChange("Washes")}
        >
          Washes
        </button>
      </nav>
      <div className="flex gap-10 px-10 justify-center">
        {selectedService === "All Services" && (
          <>
            {loading ? (
              <div>
                <img src={LoadingGif} alt="loading..." className="w-[200px]" />
              </div>
            ) : (
              <div className="flex flex-wrap mobile:flex-col  items-center gap-6">
                {data.map((e) => (
                  <div
                    key={e._id}
                    className="bg-white pb-3 w-[350px] rounded-md shadow-md"
                  >
                    <img
                      src={`${api}${e.imgUrl}`}
                      alt="Placeholder"
                      className="mb-4 w-full h-[190px]"
                    />
                    <h4 className="my-1 ml-2 text-xl">{e.title}</h4>
                    <h5 className="my-1 ml-2 text-lg">
                      {e.time}mins | {e.price}Pkr
                    </h5>
                    <button className="bg-black  text-white px-4 py-2 ml-2 my-1 rounded-md mt-4">
                      Book Now
                    </button>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ServicesComponent;
