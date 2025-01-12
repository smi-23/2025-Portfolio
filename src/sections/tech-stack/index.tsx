import { TECH, TechInfo } from "@/data/tech";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

export default function TechStack() {
  return (
    <div id="tech-stack">
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
          기술 스택
        </Typography>
      </div>
      <Stack
        alignItems={"center"}
        sx={{
          px: 1,
          py: 10,
          width: "100%",
          backgroundColor: "#efefef",
        }}
        spacing={2}
      >
        <Grid2 container sx={{ maxWidth: 600 }}>
          {TECH.map((techStack: TechInfo) => (
            <Grid2 size={3}>
              <Tooltip title={techStack.id} key={techStack.id}>
                <Box
                  sx={{
                    backgroundColor: "white", // 배경을 흰색으로 설정
                    borderRadius: "35px", // 테두리를 둥글게 설정
                    padding: "15px", // 이미지 주위에 여백 추가
                    margin: 2,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 80,
                    height: 80,
                  }}
                >
                  <Image src={techStack.icon} alt={techStack.id} width={70} height={70} style={{ margin: 40 }} />
                </Box>
              </Tooltip>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </div>
  );
}
