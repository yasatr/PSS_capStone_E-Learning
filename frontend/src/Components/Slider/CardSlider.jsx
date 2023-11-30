import React, { useRef, useState } from "react";
import CourseCard from "../Card/CourseCard";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const CardSlider = () => {
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
    <div style={{ margin: "20px" }}>
      <Slider {...settings}>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
        <div>
          <CourseCard />
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
