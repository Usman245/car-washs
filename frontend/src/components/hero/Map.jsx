import { useRef, useEffect, useContext } from "react";
import BookingContext from "../../BookingContext";

const Map = () => {
  const mapRef = useRef(null);
  let YOUR_SHOP_LATITUDE = 30.98248;
  let YOUR_SHOP_LONGITUDE = 70.95099;
  const { setErrorMessage, setError } = useContext(BookingContext);

  useEffect(() => {
    // Initialize the map
    try {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: YOUR_SHOP_LATITUDE, lng: YOUR_SHOP_LONGITUDE },
        zoom: 15, // Adjust the zoom level as needed
      });

      // Add a marker for your shop location
      new window.google.maps.Marker({
        position: { lat: YOUR_SHOP_LATITUDE, lng: YOUR_SHOP_LONGITUDE },
        map,
        title: "Your Shop",
      });
    } catch (err) {
      setErrorMessage("Maps is not working properly");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  }, []);

  return (
    <div
      className="my-6"
      ref={mapRef}
      style={{ width: "100%", height: "400px" }}
    ></div>
  );
};

export default Map;
