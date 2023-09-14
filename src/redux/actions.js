import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/addContact',
  ({ name, number }) => {
    return { payload: { name, number, id: nanoid() } };
  }
);

console.log(addContact('Oleg', 1234567));

export const deleteContact = createAction('contacts/deleteContact');

export const filterContacts = createAction('contacts/filterContacts');
