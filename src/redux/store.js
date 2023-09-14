import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filterContactsReducer } from './reducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterContactsReducer,
  },
});
