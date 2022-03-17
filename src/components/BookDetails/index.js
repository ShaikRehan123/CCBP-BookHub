import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../Navbar";
import Loader from "react-loader-spinner";
import Book from "../Book";
const BookDetails = () => {
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState([]);
  const { id } = useParams();
  const jwtToken = Cookies.get("jwt_token");
  let url = `https://apis.ccbp.in/book-hub/books/${id}`;
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    method: "GET",
  };
  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setBook(data.book_details);
      });
  }, [url]);
  const { about_book, about_author } = book;
  if (loading)
    return (
      <div className="loader-container" testid="loader">
        <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
      </div>
    );
  return (
    <>
      <NavBar />
      <div
        className="book-details-container"
        style={{
          background: "#E5E5E5",
          display: "flex",
          flexDirection: "rows",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "70%",
            background: "white",
            borderRadius: "10px",
            height: "50%",
          }}
        >
          <div
            className="books-container"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Book key={book.id} book={book} />;
          </div>
          {/* Draw a border line */}
          <div
            className="border-line"
            style={{
              width: "100%",
              height: "1px",
              backgroundColor: "#0284C7",
            }}
          />
          {/* Draw a border line */}
          <div
            className="about_container"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "start",
              width: "100%",
              padding: "20px",
            }}
          >
            <div
              className="about-book-container"
              style={{
                display: "flex",
                width: "100%",
                marginTop: "20px",
              }}
            >
              <div
                className="about-book"
                style={{
                  width: "50%",
                }}
              >
                <h2>About Book</h2>
                <p>{about_book}</p>
              </div>
            </div>
            <div
              className="about-author"
              style={{
                width: "50%",
              }}
            >
              <h2>About Author</h2>
              <p>{about_author}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDetails;
