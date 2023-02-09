import { useEffect, useState } from 'react';
import { useAppSelector } from '@/store/hooks/useAppSelector';

export const useFilterType = (initialType: string) => {
  const { type } = useAppSelector(state => state.filterCategories);
  const [activeTab, setActiveTab] = useState<string>('');

  useEffect(() => {
    type === initialType
      ? setActiveTab('bg-[#333] bg-opacity-10')
      : setActiveTab('');
  }, [type]); // eslint-disable-line

  return {
    activeTab
  };
};
