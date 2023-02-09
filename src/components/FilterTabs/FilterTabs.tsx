import { FC } from 'react';
import { Tab } from '@/components/Tab';
import { useActions } from '@/store/hooks/useActions';
import { tabs } from '@/utils/constants/tabs.constant';

const FilterTabs: FC = () => {
  const { setFilter } = useActions();

  return (
    <ul className='bg-[#35A7FF] ml-auto text-white flex gap-1'>
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

export { FilterTabs };
