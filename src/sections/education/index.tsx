import EducationBox from "./view/EducationBox";
import { EDUCATIONS, EducationInfo } from "@/data/education";
import SectionLayout from "../layout";

export default function Education() {
  return (
    <SectionLayout id="education" title="Education">
      {EDUCATIONS.map((education: EducationInfo, index) => (
        <EducationBox key={index} education={education} />
      ))}
    </SectionLayout>
  );
}
