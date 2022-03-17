import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img
        src="https://res.cloudinary.com/dsc7vpalz/image/upload/v1647501256/uysj4pgn5lzinx79cjdo.png"
        style={{
          width: "300px",
          height: "300px",
        }}
        alt="not found"
      />
      <h1>Page Not Found</h1>
      <p>we are sorry, the page you requested could not be found</p>
      <Link to="/">
        <button
          style={{
            backgroundColor: "#0284C7",
            color: "white",
            borderRadius: "10px",
            padding: "10px",
            fontSize: "20px",
            margin: "10px",
            outline: "none",
            cursor: "pointer",
            boxShadow: "0px 0px 10px #0284C7",
            border: "none",
          }}
        >
          Go Back to Home
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
