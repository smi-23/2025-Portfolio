import { ChildCare, SvgIconComponent } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

interface TooltipIconProps {
  title: string;
  Icon: SvgIconComponent;
  onClick?: () => void;
}

export default function TooltipIcon({ title, Icon, onClick }: TooltipIconProps) {
  return (
    <Tooltip title={title} onClick={onClick}>
      <IconButton>
        <Icon />
      </IconButton>
    </Tooltip>
  );
}
