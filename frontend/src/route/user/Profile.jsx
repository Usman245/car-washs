import { useContext, useEffect, useState } from "react";
import axios from "axios";
import BookingContext from "../../BookingContext";

const Profile = () => {
  const api = import.meta.env.VITE_API;
  const { userEmail } = useContext(BookingContext);
  useEffect(() => {
    const fetchBooking = async () => {
      const res = await axios.post(`${api}/user/getBooking`, { userEmail });
    };
    fetchBooking();
  });
  return (
    <div>
      <h1>Y</h1>
    </div>
  );
};

export default Profile;
