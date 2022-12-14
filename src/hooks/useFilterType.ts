import { useEffect, useState } from 'react';
import styles from '@/components/FilterTabs/FilterTabs.module.scss';
import { useAppSelector } from '@/store/hooks/useAppSelector';

export const useFilterType = (initialType: string) => {
  const { type } = useAppSelector(state => state.filterCategories);
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    type === initialType ? setActiveTab(styles.active) : setActiveTab('');
  }, [type]); // eslint-disable-line

  return {
    activeTab
  };
};
