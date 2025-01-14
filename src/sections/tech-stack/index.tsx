import { TECH, TechInfo } from "@/data/tech";
import { Box, Grid2 } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Image from "next/image";
import SectionLayout from "../layout";

export default function TechStack() {
  return (
    <SectionLayout id="tech-stack" title="기술 스택" sx={{ backgroundColor: "#efefef" }}>
      <Grid2 container sx={{ maxWidth: 550 }}>
        {TECH.map((techStack: TechInfo) => (
          <Grid2 key={techStack.id} size={3} justifyItems={"center"} sx={{}}>
            <Tooltip title={techStack.id}>
              <Box
                sx={{
                  backgroundColor: "white",
                  borderRadius: "35px",
                  padding: "15px",
                  mb: 3,
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
    </SectionLayout>
  );
}
