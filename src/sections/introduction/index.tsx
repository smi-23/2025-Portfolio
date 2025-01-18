// "use client";
import Grid from "@mui/material/Grid2";
import ProfilePicture from "./view/ProfilePicture";
import AboutMe from "./view/AboutMe";
import Contact from "./view/Contact";
import { Stack } from "@mui/material";

export default function Introduction() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ height: "100vh", mx: "auto", pb: 10, gap: 10 }}
      >
        <Grid alignItems="center">
          <Stack direction="column" spacing={2} sx={{ mt: 7 }}>
            <AboutMe />
            <Contact />
          </Stack>
        </Grid>
        <Grid alignItems="center">
          <ProfilePicture />
        </Grid>
      </Grid>
    </>
  );
}
