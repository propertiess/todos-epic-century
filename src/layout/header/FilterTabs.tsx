import { useParamFilterBy } from '@/shared/hooks';
import { tabs } from '@/shared/lib/tabs.constant';
import { MenuTab } from './MenuTab';

export const FilterTabs = () => {
  const { changeFilterBy } = useParamFilterBy();

  return (
    <ul className='bg-main ml-auto text-white flex gap-1'>
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
