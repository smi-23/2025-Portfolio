"use client";
import { Stack, Typography } from "@mui/material";
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
          sequence={[
            "팀원들 간의 원활한 커뮤니케이션을 중요하게 생각하고,",
            1000,
            "문제 해결을 위해 스스로에게 끊임없이 질문하는",
            1000,
          ]}
          preRenderFirstString={true}
          wrapper={"span"}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", width: "7em" }}
        />
        <span style={{ fontSize: "2em" }}></span>
      </div>
      <Typography sx={{ fontSize: "2em" }}>
        개발자가 되기 위해 노력하는<strong>조가람</strong>입니다.
      </Typography>
    </Stack>
  );
}
