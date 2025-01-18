"use client";
import { Stack } from "@mui/material";
import { SOCIALS, Social } from "@/data/social";
import TooltipIcon from "@/components/icon/tooltipIcon";
import { ToastContainer, toast } from "react-toastify";
import "./Contact.css";

export default function Contact() {
  const notifyEvent = (text: string) => {
    try {
      if (text.startsWith("https://")) {
        window.open(text, "_blank");
      } else {
        toast.success(`${text}가 복사되었습니다.`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`${text}가 복사에 실패하였습니다.`);
    }
  };

  return (
    <>
      <Stack direction="row" spacing={2} alignItems="center">
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
