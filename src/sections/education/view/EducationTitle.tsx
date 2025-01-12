import { Stack, Typography } from "@mui/material";
import Image from "next/image";

interface EducationTitleProps {
  imgSrc: string;
  name: string;
  from: string;
  duration: string;
}

export default function EducationTitle({ imgSrc, name, from, duration }: EducationTitleProps) {
  return (
    <Stack sx={{}}>
      <Image
        src={imgSrc}
        alt="educationImg"
        width={150}
        height={150}
        style={{
          borderRadius: "40px",
          marginBottom: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Typography sx={{ fontWeight: 700, fontSize: 30 }}>{name}</Typography>
      <Typography variant={"body1"}>주관: {from}</Typography>
      <Typography variant={"body1"}>{duration}</Typography>
    </Stack>
  );
}
