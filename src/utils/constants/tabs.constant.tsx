import {
  TabAllIcon,
  TabCheckedIcon,
  TabUnCheckedIcon,
} from "@/components/ui/icons";
import { ITab } from "@/interfaces/tab.interface";

const size = {
  width: 24,
  height: 24,
};

export const tabs: ITab[] = [
  { icon: <TabAllIcon {...size} />, type: "all" },
  { icon: <TabCheckedIcon {...size} />, type: "checked" },
  { icon: <TabUnCheckedIcon {...size} />, type: "unchecked" },
];
