import "./index.css";
const BookItem = (props) => {
  const { book } = props;
  return (
    <div className="bookItem">
      <img src={book.cover_pic} className="cover_pic" />
    </div>
  );
};

export default BookItem;
