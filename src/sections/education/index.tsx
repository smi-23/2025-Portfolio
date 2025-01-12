import { Stack, Typography } from "@mui/material";
import EducationBox from "./view/EducationBox";
import { EDUCATIONS, EducationInfo } from "@/data/education";

export default function Education() {
  return (
    <div id="educations">
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          px: 1,
          py: 10,
          width: "100%",
          // backgroundColor: "gray",
        }}
        spacing={2}
      >
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <Typography variant={"h4"} sx={{ fontWeight: 700 }}>
            교육
          </Typography>
        </div>
        {EDUCATIONS.map((education: EducationInfo, index) => (
          <EducationBox key={index} education={education} />
        ))}
      </Stack>
    </div>
  );
}
