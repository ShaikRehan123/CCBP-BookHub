// Write your code here
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BookItem from "../BookItem";

const BookSlider = (props) => {
  const settings = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
  };
  const { books } = props;

  return (
    <>
      <Slider {...settings}>
        {books.map((eachBook) => (
          <ul
            style={{
              paddingRight: "10px",
            }}
          >
            <BookItem key={eachBook.id} book={eachBook} />
          </ul>
        ))}
      </Slider>
    </>
  );
};

export default BookSlider;
