import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allActions } from '@/shared/lib/allActions.constant';
import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
