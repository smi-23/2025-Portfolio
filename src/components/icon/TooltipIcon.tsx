"use client";
import { SvgIconComponent } from "@mui/icons-material";
import { IconButton, StackProps, Tooltip } from "@mui/material";

interface TooltipIconProps extends StackProps {
  title: string;
  Icon: SvgIconComponent;
  onClick?: () => void;
  tooltipPlacement?:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
}

export default function TooltipIcon({ title, Icon, onClick, tooltipPlacement = "bottom", sx }: TooltipIconProps) {
  return (
    <Tooltip title={title} placement={tooltipPlacement}>
      <IconButton onClick={onClick}>
        <Icon sx={{ ...sx }} />
      </IconButton>
    </Tooltip>
  );
}
