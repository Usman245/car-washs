import { useContext } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import BookingContext from "../../BookingContext";

const Error = () => {
  const { setError, errorMessage } = useContext(BookingContext);
  return (
    <div className="fixed top-0 bg-white max-w-fit z-50 flex p-2 gap-3">
      <p>{errorMessage}</p>
      <TiDeleteOutline
        className=" w-7 h-7 text-red-500 hover"
        onClick={() => setError(false)}
      />
    </div>
  );
};

export default Error;
