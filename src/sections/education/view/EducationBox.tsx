import { Grid2 } from "@mui/material";
import EducationTitle from "./EducationTitle";
import { EducationInfo } from "@/data/education";
import EducationDetail from "./EducationDetail";

interface EducationBoxProps {
  education: EducationInfo;
}

export default function EducationBox({ education }: EducationBoxProps) {
  const { imgSrc, name, from, duration, description, mdFilePath } = education;
  return (
    <Grid2 container direction={"row"} maxWidth={"md"} sx={{}}>
      <Grid2
        size={{
          xs: 12,
          sm: 3,
        }}
        sx={{
          pb: { xs: 3, sm: 0 },
          borderRight: { xs: "0px", sm: "1px solid" },
          borderColor: { xs: "none", sm: "#d1d1d1" },
        }}
      >
        <EducationTitle imgSrc={imgSrc} name={name} from={from} duration={duration} />
      </Grid2>
      <Grid2
        size={{
          xs: 12,
          sm: 9,
        }}
      >
        <EducationDetail description={description} mdFilePath={mdFilePath} />
      </Grid2>
    </Grid2>
  );
}
