import { configureStore } from '@reduxjs/toolkit';
import { SliceContacts, SliceFilter } from '../Slices/Slices';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  contacts: SliceContacts.reducer,
  filter: SliceFilter.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
