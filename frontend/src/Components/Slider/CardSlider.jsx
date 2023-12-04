import React, { useContext, useRef, useState } from "react";
import CourseCard from "../Card/CourseCard";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import SmallCourseCard from "../Card/SmallCourseCard";

const CardSlider = (props) => {
  const {data} = props;
  // console.log("Ye data hai slider ka", data);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    accessibility: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    draggable: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div style={{ margin: 30 }}>
      <Slider {...settings}>
        {data.map((item) => (
          <SmallCourseCard key={item.courseId} singleObject={item} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
