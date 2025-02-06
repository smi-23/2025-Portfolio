import FloatingButton from "@/components/button/FloatingButton";
import TooltipIcon from "@/components/icon/TooltipIcon";
import { SvgIconComponent } from "@mui/icons-material";
import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface FloatingMenuProps {
  links: { title: string; url: string; icon: SvgIconComponent }[];
}
export default function FloatingMenu({ links }: FloatingMenuProps) {
  return (
    <FloatingButton>
      {links.map(
        (link) =>
          link.url && (
            <TooltipIcon
              key={link.title}
              title={link.title}
              Icon={link.icon}
              onClick={() => {
                window.open(link.url, "_blank");
              }}
              tooltipPlacement={"right"}
            />
          ),
      )}
      <Link href={"/#project"} style={{ textDecoration: "none" }}>
        <TooltipIcon key={"back"} title={"Back"} Icon={ArrowBackIcon} tooltipPlacement={"right"} />
      </Link>
    </FloatingButton>
  );
}
