import Grid from "@mui/material/Grid2";
import ProfilePicture from "./view/ProfilePicture";
import AboutMe from "./view/AboutMe";
import Contact from "@/components/contact/Contac";

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
          py: 7,
          px: 1,
        }}
      >
        <Grid sx={{}}>
          <AboutMe />
          <Contact justifyContent={{ xs: "center", sm: "flex-start" }} pl={{ xs: 2, sm: 0 }} sx={{ py: 2 }} />
        </Grid>
        <Grid>
          <ProfilePicture />
        </Grid>
      </Grid>
    </>
  );
}
