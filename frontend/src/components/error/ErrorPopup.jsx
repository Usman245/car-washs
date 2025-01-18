const ErrorPopup = ({ message }) => {
  return (
    <div className="absolute top-0 left-0 right-0 bg-red-500 text-white py-2 text-center">
      {message ? message : "An error occurred. Please try again later."}
    </div>
  );
};

export default ErrorPopup;
