import "./index.css";
import { useHistory } from "react-router-dom";
const BookItem = (props) => {
  const { book } = props;
  const history = useHistory();
  return (
    <div className="bookItem">
      <img
        src={book.cover_pic}
        className="cover_pic"
        onClick={() => {
          history.push(`/book/${book.id}`);
        }}
        style={{
          cursor: "pointer",
        }}
      />
      <h1
        style={{
          fontSize: "18px",
        }}
      >
        {book.title}
      </h1>
      <p>{book.author_name}</p>
    </div>
  );
};

export default BookItem;
