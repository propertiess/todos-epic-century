import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contextMenuSlice, filterCategoriesSlice, todosSlice } from './slices';

export const rootReducer = combineReducers({
  todos: todosSlice.reducer,
  filterCategories: filterCategoriesSlice.reducer,
  contextMenu: contextMenuSlice.reducer
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['contextMenu']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
