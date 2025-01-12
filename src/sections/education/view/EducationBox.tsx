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
    <Grid2
      container
      direction={"row"}
      maxWidth={"md"}
      sx={{
        pt: 2,
      }}
    >
      <Grid2
        size={{ xs: 12, sm: 3 }}
        sx={{
          py: 1,
          borderRight: "1px solid",
          borderColor: "black",
        }}
      >
        <EducationTitle imgSrc={imgSrc} name={name} from={from} duration={duration} />
      </Grid2>
      <Grid2
        size={{ xs: 12, sm: 9 }}
        sx={{
          py: 1,
        }}
      >
        <EducationDetail description={description} mdFilePath={mdFilePath} />
      </Grid2>
    </Grid2>
  );
}
