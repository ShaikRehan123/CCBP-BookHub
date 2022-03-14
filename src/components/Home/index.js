import { useState } from "react";
import NavBar from "../Navbar";
import './index.css'
const Home = () => {
  const [loading , setLoading] = useState(false);
  const [books , setBooks] = useState([])
  // import books from this url https://apis.ccbp.in/book-hub/top-rated-books using useEffect
  
  return (
    <div>
      <NavBar />
      <div className="Hero-Container">
          <h1>Find Your Next Favourite Books?</h1>
          <p>You are in the right place. Tell us what titles or genres you have enjoyed in the past, and we will give you surprisingly insightful reccomendations.</p>
      </div>
    </div>
  );
};

export default Home;
