import { SvgIconComponent } from "@mui/icons-material";

import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";

export interface Social {
  id: string;
  text: string;
  icon: SvgIconComponent;
}
export const SOCIALS: Social[] = [
  {
    id: "github",
    text: "https://github.com/smi-23",
    icon: GitHubIcon,
  },
  {
    id: "blog",
    text: "https://velog.io/@smi1991/posts",
    icon: EditNoteIcon,
  },
  {
    id: "email",
    text: "garamdev23@gamil.com",
    icon: EmailIcon,
  },
  {
    id: "phone",
    text: "01096967025",
    icon: ContactPhoneIcon,
  },
]

