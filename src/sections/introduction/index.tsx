import Grid from "@mui/material/Grid2";
import ProfilePicture from "./view/ProfilePicture";
import AboutMe from "./view/AboutMe";
import Contact from "./view/contact/Contact";

export default function Introduction() {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={{ xs: 0, sm: 5, md: 10 }}
        sx={{
          height: { xs: "100vh" },
          mx: "auto",
          py: 6,
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
