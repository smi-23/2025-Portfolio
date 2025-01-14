import { Stack, Typography } from "@mui/material";
import EducationBox from "./view/EducationBox";
import { EDUCATIONS, EducationInfo } from "@/data/education";
import SectionLayout from "../layout";

export default function Education() {
  return (
    <SectionLayout id="education" title="교육">
      {EDUCATIONS.map((education: EducationInfo, index) => (
        <EducationBox key={index} education={education} />
      ))}
    </SectionLayout>
  );
}
