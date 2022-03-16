import NavBar from "../Navbar";
import Sidebar from "../BookShelves-Sidebar";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Loader from "react-loader-spinner";
import { BsSearch } from "react-icons/bs";
import Book from "../Book";
import Footer from "../Footer";

const BookShelves = (props) => {
  const { bookshelvesList } = props;
  const [selectedShelf, setSelectedShelf] = useState(bookshelvesList[0]);
  const [SearchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const jwtToken = Cookies.get("jwt_token");
  let url = `https://apis.ccbp.in/book-hub/books?shelf=${selectedShelf.value}`;
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
  }, [url]);
  console.log(books);
  if (loading)
    return (
      <div className="loader-container" testid="loader">
        <Loader type="TailSpin" color="#0284C7" height={50} width={50} />
      </div>
    );
  if (books.length === 0) {
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
        <h1>Your search for {SearchQuery} not found</h1>
        <img
          style={{ width: "50%" }}
          src="https://res.cloudinary.com/dsc7vpalz/image/upload/v1647447835/eicobqbrorkqlhv905r2.png"
          alt="notfound"
        />
      </div>
    );
  }
  return (
    <>
      <NavBar />
      <Sidebar
        bookshelvesList={bookshelvesList}
        selectedShelf={selectedShelf}
        setSelectedShelf={setSelectedShelf}
      />
      <div className="bookshelves-container">
        {/* Lets create Search */}
        <div
          className="search-container"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <input
            style={{
              width: "50%",
              height: "40px",
              borderRadius: "5px",
              border: "1px solid #0284C7",
              padding: "10px",
              fontSize: "20px",
              color: "#0284C7",
              margin: "10px",
              outline: "none",
              boxShadow: "0px 0px 10px #0284C7",
            }}
            type="text"
            placeholder="Search"
            value={SearchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <BsSearch
            style={{
              color: "#0284C7",
              fontSize: "30px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              url = `https://apis.ccbp.in/book-hub/books?shelf=${selectedShelf.value}&search=${SearchQuery}`;
              setLoading(true);
              fetch(url, options)
                .then((response) => response.json())
                .then((data) => {
                  setLoading(false);
                  setBooks(data.books);
                });
            }}
          />
        </div>
        <div
          className="books-container"
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px",
            position: "absolute",
            top: "120px",
            left: "240px",
          }}
        >
          {books.map((book) => {
            return <Book key={book.id} book={book} />;
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BookShelves;
