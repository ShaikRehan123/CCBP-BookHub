import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import Loader from "react-loader-spinner";
import BookSlider from "../BooksSlider";
import { useHistory } from "react-router-dom";
import NavBar from "../Navbar";
import "./index.css";
import Footer from "../Footer";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const history = useHistory();
  // import books from this url https://apis.ccbp.in/book-hub/top-rated-books using useEffect
  const jwtToken = Cookies.get("jwt_token");
  const url = "https://apis.ccbp.in/book-hub/top-rated-books";
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
        setBooks(data.books);
      });
  }, []);

  if (loading)
    return (
      <div className="loader-container" testid="loader">
        <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
      </div>
    );
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

        <div className="Books-Container">
          <span>
            <button
              className="fb-button"
              onClick={() => {
                history.push("/shelf");
              }}
            >
              Find Books
            </button>
          </span>
          <div className="books-slider">
            <BookSlider books={books} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
