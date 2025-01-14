"use client";
import ProjectCard from "@/components/card/projectCard";
import SectionLayout from "../layout";
import CustomSwiper from "@/components/swipe/customSwiper";

import { Grid2 } from "@mui/material";

import { SwiperSlide } from "swiper/react";

export default function Project({ projects }: { projects: any[] }) {
  return (
    <SectionLayout id="project" title="프로젝트" sx={{ backgroundColor: "#efefef" }}>
      <CustomSwiper>
        {projects.map((project) => (
          <SwiperSlide key={`slide-${project.id}`}>
            <Grid2 key={`grid-${project.id}`} justifyItems={"center"}>
              <ProjectCard project={project} />
            </Grid2>
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </SectionLayout>
  );
}
