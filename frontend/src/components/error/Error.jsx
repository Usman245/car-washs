// ErrorPopup.jsx
import React from "react";

const ErrorPopup = ({ message }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "red", // Customize the background color
        color: "white", // Customize the text color
        textAlign: "center",
        padding: "1rem",
        zIndex: 9999, // Ensure it's on top
      }}
    >
      {message}
    </div>
  );
};

export default ErrorPopup;
