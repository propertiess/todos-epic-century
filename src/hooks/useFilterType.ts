import { useEffect, useState } from "react";
import { useAppSelector } from "@/store/hooks/useAppSelector";
import styles from "@/components/FilterTabs/FilterTabs.module.scss";

export const useFilterType = (initialType: string) => {
  const { type } = useAppSelector(state => state.filterCategories);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    type === initialType ? setActiveTab(styles.active) : setActiveTab("");
  }, [type]); // eslint-disable-line

  return {
    activeTab,
  };
};
