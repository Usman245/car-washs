import { useState } from "react";
import ErrorPopup from "./ErrorPopup";

const WithErrorHandling = (WrappedComponent) => {
  const WithErrorHandlingComponent = (props) => {
    const [error, setError] = useState(null);

    // Function to handle errors globally
    const handleError = (error) => {
      setError(error);
      setTimeout(() => {
        setError(null);
      }, 3000); // Hide error popup after 3 seconds
    };

    return (
      <>
        {error && <ErrorPopup message={error.message} />}
        <WrappedComponent {...props} handleError={handleError} />
      </>
    );
  };

  return WithErrorHandlingComponent;
};

export default WithErrorHandling;
