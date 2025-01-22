// "use client";
import Grid from "@mui/material/Grid2";
import ProfilePicture from "./view/ProfilePicture";
import AboutMe from "./view/AboutMe";
import Contact from "./view/contact/Contact";
import { Stack } from "@mui/material";

export default function Introduction() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          height: { xs: "", sm: "100vh" },
          mx: "auto",
          py: 10,
          px: 1,
        }}
      >
        <Grid>
          <AboutMe />
          <Contact />
        </Grid>
        <Grid>
          <ProfilePicture />
        </Grid>
      </Grid>
    </>
  );
}
