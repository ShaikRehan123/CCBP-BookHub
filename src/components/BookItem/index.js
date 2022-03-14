const BookItem = (props) => {
  const { bookDetails } = props;
  return <div>{bookDetails.title}</div>;
};

export default BookItem;
