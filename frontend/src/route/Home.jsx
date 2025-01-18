import { useContext, useEffect } from "react";
import ServicesComponent from "../components/hero/Category";
import ContactUs from "../components/hero/ContactUs";
import HeroSection from "../components/hero/Hero";
import Map from "../components/hero/Map";
import HeroTwo from "../components/hero/SecondaryHero";
import { Learn } from "../components/mini/Learn";
import axios from "axios";
import BookingContext from "../BookingContext";
import Error from "../components/mini/Error";

const Home = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const api = import.meta.env.VITE_API;
  const { error } = useContext(BookingContext);
  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.post(
          `${api}/user/verify-access-token`,
          null, // Empty body
          { headers: { Authorization: `Bearer ${accessToken}` } }
        );
        if (response.status === 200) {
          // Access token is valid
          return true;
        }
      } catch (error) {
        // Access token is invalid or expired
        return false;
      }
    };
    if (accessToken) {
      verifyToken();
    }
  });
  return (
    <div className="flex flex-col justify-center items-center">
      {error && <Error />}
      <HeroSection />
      <HeroTwo />
      <ServicesComponent />
      <Learn />
      <Map />
      <ContactUs />
    </div>
  );
};

export default Home;
