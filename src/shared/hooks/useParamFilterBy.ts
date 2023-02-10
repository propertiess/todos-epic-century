import { useSearchParams } from 'react-router-dom';
import { IFilter } from '@/shared/types';

export const useParamFilterBy = () => {
  const [params, setParams] = useSearchParams();

  const changeFilterBy = (by: IFilter) => {
    setParams({ filter: by });
  };

  return {
    filterBy: (params.get('filter') ?? 'all') as IFilter,
    changeFilterBy
  };
};
