import { RiStarSFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
const Book = (props) => {
  const { book } = props;
  const history = useHistory();
  return (
    <div
      className="book-container"
      style={{
        display: "flex",
        flexDirection: "row",
        marginTop: "20px",
        width: "50%",
      }}
    >
      <div className="book-image-container">
        <img
          src={book.cover_pic}
          alt={book.title}
          style={{
            width: "170px",
            height: "250px",
            borderRadius: "5px",
            padding: "10px",
            fontSize: "20px",
            margin: "10px",
            outline: "none",
            cursor: "pointer",
            borderRadius: "15px",
          }}
          onClick={() => {
            history.push(`/book/${book.id}`);
          }}
        />
      </div>
      <div
        className="book-details-container"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          height: "240px",
          justifyContent: "space-between",
        }}
      >
        <div className="book-title">
          <h3>{book.title}</h3>
        </div>
        <div className="book-author">
          <p>{book.author_name}</p>
        </div>
        <div
          className="book-rating"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <span>Avg Rating</span>
          <RiStarSFill
            style={{
              color: "yellow",
              fontSize: "20px",
              marginLeft: "5px",
              marginRightt: "5px",
            }}
          />
          <span>{book.rating} </span>
        </div>
        <div className="book-status">
          <span>Status : </span>
          <span
            style={{
              color: "#0284C7",
              fontSize: "20px",
              marginLeft: "5px",
              marginRightt: "5px",
              cursor: "pointer",
            }}
          >
            {book.read_status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
