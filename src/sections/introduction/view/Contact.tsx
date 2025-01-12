"use client";
import { Stack, Snackbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";
import { SOCIALS, Social } from "@/data/social";

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
      setSnackbar({ open: true, message: "Failed to copy!" });
    }
  };

  return (
    <>
      <Stack direction="row" spacing={3} alignItems="center">
        {SOCIALS.map((social: Social) => (
          <Tooltip key={social.id} title={social.id} onClick={() => copyToClipboard(social.text)}>
            <IconButton>
              <social.icon />
            </IconButton>
          </Tooltip>
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
