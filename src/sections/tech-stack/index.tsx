import { TECH, TechInfo } from "@/data/tech";
import { Box, Grid2, Stack, Typography } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";

export default function TechStack() {
  return (
    <div id="tech-stack">
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
        <div style={{ marginBottom: 20 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            기술 스택
          </Typography>
        </div>
        <Grid2 container sx={{ maxWidth: 550 }}>
          {TECH.map((techStack: TechInfo) => (
            <Grid2 key={techStack.id} size={3} sx={{ backgroundColor: "#efefef" }}>
              <Tooltip title={techStack.id}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "35px",
                    padding: "15px",
                    mb: 3,
                    ml: 3,
                    width: 50,
                    height: 50,
                  }}
                >
                  <Image src={techStack.icon} alt={techStack.id} width={50} height={50} />
                </Box>
              </Tooltip>
            </Grid2>
          ))}
        </Grid2>
      </Stack>
    </div>
  );
}
