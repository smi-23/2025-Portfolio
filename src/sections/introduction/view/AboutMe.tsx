"use client";
import { Stack, Typography } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <>
      <Stack direction="column" alignItems={{ xs: "center", sm: "flex-start" }}>
        <Typography sx={{ fontSize: "1.5em", color: "#22d3d6" }}>
          <strong>Software Developer</strong>
        </Typography>
        <Typography sx={{ fontSize: "2em" }}>반갑습니다!</Typography>
        <div style={{ display: "flex" }}>
          <TypeAnimation
            sequence={["원활한 커뮤니케이션을 중시하고,", 1000, "끊임없이 질문하는", 1000]}
            preRenderFirstString={true}
            wrapper={"span"}
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em", width: "14em" }}
          />
          <span style={{ fontSize: "2em" }}></span>
        </div>
        <Typography sx={{ fontSize: "2em" }}>
          개발자 <strong>조가람</strong>입니다.
        </Typography>
      </Stack>
    </>
  );
}
