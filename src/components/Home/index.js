import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import BookSlider from "../BooksSlider";
import NavBar from "../Navbar";
import "./index.css";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  // import books from this url https://apis.ccbp.in/book-hub/top-rated-books using useEffect
  const jwtToken = Cookies.get("jwt_token");
  const url = "https://apis.ccbp.in/book-hub/top-rated-books";
  const options = {
    headers: {
      Authorization: `Bearer ${jwtToken}`
    },
    method: "GET"
  };
  useEffect(() => {
    setLoading(true);
    fetch(url, options)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => {
        setLoading(false);
        setBooks(data.books);
      });
  }, []);
  return (
    <div>
      <NavBar />
      <div className="Hero-Page">
        <div className="Hero-Container">
          <h1>Find Your Next Favourite Books?</h1>
          <p>
            You are in the right place. Tell us what titles or genres you have
            enjoyed in the past, and we will give you surprisingly insightful
            reccomendations.
          </p>
        </div>
        {loading ? (
          <div className="loader-container" testid="loader">
            <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
          </div>
        ) : (
          <div className="Books-Container">
            <div className="Books-Container-Header">
              <h1>Top Rated Books</h1>
              <span>
                <button className="fb-button">Find Books</button>
              </span>
            </div>
            <BookSlider books={books} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
