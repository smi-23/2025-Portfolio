import { Stack, Typography } from "@mui/material";
import SectionLayout from "../layout";
import Contact from "./view/Contact";

export default function Footer() {
  return (
    <SectionLayout id="tech-stack" title="" sx={{ backgroundColor: "" }}>
      <Stack
        direction={"row"}
        textAlign={"center"}
        alignItems={"center"}
        display={"flex"}
        justifyItems={"center"}
        spacing={10}
      >
        <Typography>조가람 블로그</Typography>
        <Contact />
      </Stack>
    </SectionLayout>
  );
}
