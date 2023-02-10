import { MenuTab } from '@/components';
import { useParamFilterBy } from '@/hooks';
import { tabs } from '@/utils/constants/tabs.constant';

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
