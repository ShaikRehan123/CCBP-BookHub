import "./index.css";
import { useHistory } from "react-router-dom";
const BookItem = (props) => {
  const { book } = props;
  const history = useHistory();
  return (
    <li className="bookItem">
      <img
        src={book.cover_pic}
        className="cover_pic"
        onClick={() => {
          history.push(`/book/${book.id}`);
          p;
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
      <h1>{book.author_name}</h1>
    </li>
  );
};

export default BookItem;
