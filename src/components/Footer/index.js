import { FaGoogle, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div
      className="footer-container"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0284C7",
        position: "fixed",
        bottom: "0",
        top: "auto",
        width: "100%",
      }}
    >
      <div
        className="icons-container"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          padding: "20px",
        }}
      >
        <div
          className="icon-container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FaGoogle
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          <FaTwitter
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          <FaInstagram
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
          <FaYoutube
            style={{
              color: "white",
              fontSize: "30px",
              marginRight: "10px",
            }}
          />
        </div>
      </div>
      <h1
        className="footer-title"
        style={{
          color: "white",
          fontSize: "20px",
          margin: "10px",
          textAlign: "center",
          fontFamily: "Roboto",
          fontWeight: "bold",
        }}
      >
        Follow Us
      </h1>
    </div>
  );
};

export default Footer;
