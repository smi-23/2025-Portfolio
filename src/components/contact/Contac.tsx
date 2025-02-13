"use client";
import { Stack, StackProps, useTheme } from "@mui/material";
import { SOCIALS, Social } from "@/data/social";
import { ToastContainer, toast } from "react-toastify";
import "./Toastify.css";
import TooltipIcon from "../icon/TooltipIcon";

export default function Contact({ sx, ...rest }: StackProps) {
  const muiTheme = useTheme();
  const isDark = muiTheme.palette.mode === "dark" ? "dark" : "light";

  const notifyEvent = async (text: string) => {
    try {
      if (text.startsWith("https://")) {
        window.open(text, "_blank");
      } else {
        await navigator.clipboard.writeText(text);
        toast.success(`${text}가 복사되었습니다.`, { theme: `${isDark}` });
      }
    } catch (error) {
      console.error(error);
      toast.error(`${text}가 복사에 실패하였습니다.`);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2} sx={{ ...sx }} {...rest}>
        {SOCIALS.map((social: Social) => (
          <TooltipIcon
            key={social.id}
            title={social.id}
            Icon={social.icon}
            onClick={() => notifyEvent(social.text)}
            sx={{ fontSize: 32 }}
          />
        ))}
        <ToastContainer autoClose={1000} />
      </Stack>
    </>
  );
}
