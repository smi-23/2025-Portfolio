"use client";
import { Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { TypeAnimation } from "react-type-animation";

export default function AboutMe() {
  return (
    <Stack direction="column">
      <Typography sx={{ fontSize: "1em" }}>
        <strong>Software Developer</strong>
      </Typography>
      <Typography sx={{ fontSize: "2em" }}>반갑습니다!</Typography>
      <div style={{ display: "flex" }}>
        <TypeAnimation
          sequence={["사랑합니다.", 1000, "좋아합니다.", 1000]}
          preRenderFirstString={true}
          wrapper={"span"}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", width: "7em" }}
        />
        <span style={{ fontSize: "2em" }}>내용sodyddfdf</span>
      </div>
      <Typography sx={{ fontSize: "2em" }}>
        개발자 <strong>조가람</strong>입니다.
      </Typography>
    </Stack>
  );
}
