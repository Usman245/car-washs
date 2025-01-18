import { Link } from "react-router-dom";
import bg from "../../assets/bg.jpg";
import { useContext } from "react";
import BookingContext from "../../BookingContext";
const HeroSection = () => {
  const { isLogin } = useContext(BookingContext);
  return (
    <div className="relative h-screen flex items-end pb-20 px-8 justify-end overflow-hidden w-full">
      <img src={bg} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-start text-white px-10 py-4 mobile:px-0">
        <h1 className="text-5xl font-bold mb-4">
          It's Time To Reclaim Your Crown!
        </h1>
        <h4 className="text-lg mb-6">
          Let us give you and your car the royal treatment you deserve! Book
          your appointment today and experience true royalty!
        </h4>
        <Link
          to={isLogin ? "/bookings" : "/login"}
          className="px-8 py-3 bg-white text-black rounded-md text-lg  transition duration-300 ease-in-out transform hover:bg-gray-200 hover:scale-105"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
