// Write your code here
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BookItem from "../BookItem";

const BookSlider = (props) => {
  const settings = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4
  };
  const { books } = props;
  console.log(books);

  return (
    <>
      <Slider {...settings}>
        {books.map((eachBook) => (
          <BookItem key={eachBook.id} bookDetails={eachBook} />
        ))}
      </Slider>
    </>
  );
};

export default BookSlider;
