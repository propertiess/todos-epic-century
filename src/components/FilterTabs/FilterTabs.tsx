import { FC, HTMLAttributes } from "react";
import { useActions } from "@/store/hooks/useActions";
import Tab from "@/components/Tab/Tab";
import styles from "./FilterTabs.module.scss";
import { tabs } from "@/utils/constants/tabs.constant";

interface Props extends HTMLAttributes<unknown> {}

const FilterTabs: FC<Props> = ({ ...rest }) => {
  const { setFilter } = useActions();

  return (
    <ul className={styles.tabs} {...rest}>
      {tabs.map(tab => (
        <Tab
          key={tab.type}
          Component={tab.icon}
          type={tab.type}
          onClick={() => setFilter(tab.type)}
        />
      ))}
    </ul>
  );
};

export default FilterTabs;