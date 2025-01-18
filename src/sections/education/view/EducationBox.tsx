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
        sx={{
          borderRight: "1px solid",
          borderColor: "#d1d1d1",
          xs: 12,
          sm: 3,
        }}
      >
        <EducationTitle imgSrc={imgSrc} name={name} from={from} duration={duration} />
      </Grid2>
      <Grid2 size={{ xs: 12, sm: 9 }} sx={{}}>
        <EducationDetail description={description} mdFilePath={mdFilePath} />
      </Grid2>
    </Grid2>
  );
}
