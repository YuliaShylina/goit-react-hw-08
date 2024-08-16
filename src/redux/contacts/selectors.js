import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectNumberFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectNumberFilter],
  (contacts, contactsFilter, numberFilter) => {
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(contactsFilter.toLowerCase()) &&
        contact.number.includes(numberFilter)
    );
  }
);
