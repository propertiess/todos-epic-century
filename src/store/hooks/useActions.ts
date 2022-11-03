import { useMemo } from "react";
import { bindActionCreators } from "@reduxjs/toolkit";
import { useAppDispatch } from "./useAppDispatch";
import { allActions } from "@/utils/constants/allActions.constant";

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};
