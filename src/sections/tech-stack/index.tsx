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
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            기술 스택
          </Typography>
        </div>
        <Grid2 container sx={{ maxWidth: 600 }}>
          {TECH.map((techStack: TechInfo) => (
            <Grid2 size={3}>
              <Tooltip title={techStack.id} key={techStack.id}>
                <Box
                  sx={{
                    backgroundColor: "white",
                    borderRadius: "35px",
                    padding: "15px",
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
