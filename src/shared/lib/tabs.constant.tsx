import { ITab } from '@/shared/types';
import { TabAllIcon, TabCheckedIcon, TabUnCheckedIcon } from '@/shared/ui';

const size = {
  width: 32,
  height: 32
};

export const tabs: ITab[] = [
  { icon: <TabAllIcon {...size} />, type: 'all' },
  { icon: <TabCheckedIcon {...size} />, type: 'checked' },
  { icon: <TabUnCheckedIcon {...size} />, type: 'unchecked' }
];
