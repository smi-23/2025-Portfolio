"use client";
import React, { ReactNode } from "react";
import { Container} from "@mui/material";
import "./CustomCarousel.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface CustomCarouselProps {
  children: ReactNode;
}

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    // prevArrow: <CustomArrow direction="left" />,
    // nextArrow: <CustomArrow direction="right" />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container className="slider-container" sx={{ maxWidth: "80%" }}>
        <Slider {...settings}>{children}</Slider>
      </Container>
    </>
  );
}
