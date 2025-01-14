"use client";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import React, { ReactNode } from "react";
import { Grid2 } from "@mui/material";
import NavigationIcon from "./navigationButton";

export interface CustomSwiperProps {
  children: ReactNode;
}
export default function CustomSwiper({ children }: CustomSwiperProps) {
  return (
    <Grid2 container sx={{ position: "relative", maxWidth: "lg" }}>
      <Swiper
        pagination={true}
        navigation={{
          prevEl: "#prev-slide-button",
          nextEl: "#next-slide-button",
        }}
        slidesPerView={3}
        spaceBetween={10}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
      {/* 네비게이션 버튼 */}
      <NavigationIcon id={"prev-slide-button"} position={"left"} icon={<NavigateBeforeIcon fontSize="large" />} />
      <NavigationIcon id={"next-slide-button"} position={"right"} icon={<NavigateNextIcon fontSize="large" />} />
    </Grid2>
  );
}
