"use client";
import { Stack, Typography } from "@mui/material";
// import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <Stack direction="column" alignItems={{ xs: "center", sm: "flex-start" }}>
      <Typography sx={{ fontSize: "1.5rem", color: "#22d3d6" }}>
        <strong>Software Developer</strong>
      </Typography>
      <Typography sx={{ fontSize: "2rem" }}>반갑습니다!</Typography>
      <Typography sx={{ fontSize: "2rem" }}>문제를 끝까지 파고 들고</Typography>
      <Typography sx={{ fontSize: "2rem" }}>소통을 중요하게 생각하는</Typography>

      {/* <div style={{ display: "flex" }}>
        <TypeAnimation
          sequence={["원활한 커뮤니케이션을", 1500, "끊임없는 성장을", 1500]}
          preRenderFirstString={true}
          wrapper={"span"}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", width: "7em" }}
        />
        <span style={{ fontSize: "2em" }}>추구하는</span>
      </div> */}
      <Typography sx={{ fontSize: "2rem" }}>
        개발자 <strong>조가람</strong>입니다.
      </Typography>
    </Stack>
  );
}
