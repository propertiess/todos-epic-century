import { useParamFilterBy } from '@/shared/hooks';
import { tabs } from '@/shared/lib/tabs.constant';

import { MenuTab } from './MenuTab';

export const FilterTabs = () => {
  const { changeFilterBy } = useParamFilterBy();

  return (
    <ul className='ml-auto flex gap-1 bg-main text-white'>
      {tabs.map(tab => (
        <MenuTab
          key={tab.type}
          Component={tab.icon}
          type={tab.type}
          onClick={() => changeFilterBy(tab.type)}
        />
      ))}
    </ul>
  );
};
