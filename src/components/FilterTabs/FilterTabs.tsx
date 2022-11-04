import { FC } from 'react';
import { Tab } from '@/components/Tab/Tab';
import { useActions } from '@/store/hooks/useActions';
import { tabs } from '@/utils/constants/tabs.constant';
import styles from './FilterTabs.module.scss';

const FilterTabs: FC = () => {
  const { setFilter } = useActions();

  return (
    <ul className={styles.tabs}>
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
