import { SvgIconComponent } from "@mui/icons-material";
import { IconButton, StackProps, Tooltip } from "@mui/material";

interface TooltipIconProps extends StackProps {
  title: string;
  Icon: SvgIconComponent;
  onClick?: () => void;
}

export default function TooltipIcon({ title, Icon, onClick, sx }: TooltipIconProps) {
  return (
    <Tooltip title={title} onClick={onClick}>
      <IconButton>
        <Icon sx={{ ...sx }} />
      </IconButton>
    </Tooltip>
  );
}
