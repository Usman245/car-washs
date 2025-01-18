const SuccessPage = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center h-screen">
      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-8">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h4 className="text-lg font-semibold text-center mb-2">Success!</h4>
      <p className="text-gray-600 text-center">
        Booking is saved. Now visit our shop at the booked time.
      </p>
    </div>
  );
};

export default SuccessPage;
