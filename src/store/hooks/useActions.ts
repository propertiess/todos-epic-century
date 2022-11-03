import { useMemo } from 'react';
import { bindActionCreators } from '@reduxjs/toolkit';
import { allActions } from '@/utils/constants/allActions.constant';
import { useAppDispatch } from './useAppDispatch';

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
