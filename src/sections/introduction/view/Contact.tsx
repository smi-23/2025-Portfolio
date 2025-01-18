"use client";
import { Stack, Snackbar } from "@mui/material";
import { useState } from "react";
import { SOCIALS, Social } from "@/data/social";
import TooltipIcon from "@/components/icon/tooltipIcon";

export default function Contact() {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
  });

  const copyToClipboard = async (text: string) => {
    try {
      if (text.startsWith("https://")) {
        window.open(text, "_blank");
      } else {
        await navigator.clipboard.writeText(text);
        setSnackbar({ open: true, message: `${text} Copied to clipboard!` });
      }
    } catch (error) {
      console.error(error);
      setSnackbar({ open: true, message: "Failed to copy!" });
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
            onClick={() => copyToClipboard(social.text)}
            sx={{ fontSize: 32 }}
          />
        ))}
        <Snackbar
          open={snackbar.open}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          message={snackbar.message}
          autoHideDuration={2000}
        />
      </Stack>
    </>
  );
}
