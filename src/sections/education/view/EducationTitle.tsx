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
    <Stack
      direction={{ xs: "row", sm: "column" }}
      alignItems={{ xs: "center", sm: "flex-start" }}
      justifyContent={{ xs: "center", sm: "flex" }}
      spacing={2}
      sx={{}}
    >
      <Image
        src={imgSrc}
        alt="educationImg"
        width={130}
        height={130}
        style={{
          borderRadius: "25px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <Stack>
        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>{name}</Typography>
        <Typography variant={"body1"}>주관: {from}</Typography>
        <Typography variant={"body1"}>{duration}</Typography>
      </Stack>
    </Stack>
  );
}
