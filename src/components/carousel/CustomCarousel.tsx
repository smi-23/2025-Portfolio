"use client";
import React, { ReactNode } from "react";
import { Grid2 } from "@mui/material";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export interface CustomCarouselProps {
  children: ReactNode;
}

export default function CustomCarousel({ children }: CustomCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <>
      <Grid2 sx={{ maxWidth: "lg" }}>
        <Slider {...settings}>{children}</Slider>
      </Grid2>
    </>
  );
}
